require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const app = express();
const port = Number(process.env.PORT) || 5000;
const jwtSecret = process.env.JWT_SECRET;
const dataFile = path.join(__dirname, "data", "products.json");

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

const slugify = (value) => String(value || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const readProducts = async () => {
  try { return JSON.parse(await fs.readFile(dataFile, "utf8")); }
  catch (error) { if (error.code === "ENOENT") return []; throw error; }
};

const writeProducts = async (products) => {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2));
};

const validateProduct = (product) => {
  const errors = [];
  if (!product.name?.trim()) errors.push("Dish name is required.");
  if (!product.description?.trim()) errors.push("Description is required.");
  if (!product.category?.trim()) errors.push("Category is required.");
  if (!Number.isFinite(Number(product.price)) || Number(product.price) < 0) errors.push("A valid price is required.");
  if (!product.image?.trim()) errors.push("Image URL is required.");
  return errors;
};

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ message: "Admin token is required." });
  try { req.admin = jwt.verify(token, jwtSecret); next(); }
  catch { return res.status(401).json({ message: "Your session has expired. Please log in again." }); }
};

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.post("/api/auth/admin/login", async (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!jwtSecret || !adminEmail || !adminPassword) return res.status(503).json({ message: "Server admin credentials are not configured." });

  const isEmailValid = String(email).toLowerCase() === adminEmail.toLowerCase();
  const isPasswordValid = await bcrypt.compare(String(password || ""), await bcrypt.hash(adminPassword, 10));
  if (!isEmailValid || !isPasswordValid) return res.status(401).json({ message: "Invalid email or password." });

  const token = jwt.sign({ email: adminEmail, role: "admin" }, jwtSecret, { expiresIn: "8h" });
  return res.json({ token, admin: { email: adminEmail, role: "admin" } });
});

app.get("/api/products", async (_req, res, next) => {
  try { res.json(await readProducts()); } catch (error) { next(error); }
});

app.post("/api/products", authenticateAdmin, async (req, res, next) => {
  try {
    const errors = validateProduct(req.body);
    if (errors.length) return res.status(400).json({ message: errors.join(" ") });
    const products = await readProducts();
    const product = { id: crypto.randomUUID(), name: req.body.name.trim(), slug: slugify(req.body.name), description: req.body.description.trim(), category: req.body.category.trim(), price: Number(req.body.price), image: req.body.image.trim(), rating: Number(req.body.rating) || 4.5, deliveryTime: req.body.deliveryTime?.trim() || "25-30 min", badge: req.body.badge?.trim() || "", createdAt: new Date().toISOString() };
    await writeProducts([product, ...products]);
    res.status(201).json(product);
  } catch (error) { next(error); }
});

app.put("/api/products/:id", authenticateAdmin, async (req, res, next) => {
  try {
    const errors = validateProduct(req.body);
    if (errors.length) return res.status(400).json({ message: errors.join(" ") });
    const products = await readProducts();
    const index = products.findIndex((product) => product.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: "Product not found." });
    const updated = { ...products[index], ...req.body, price: Number(req.body.price), slug: slugify(req.body.name), updatedAt: new Date().toISOString() };
    products[index] = updated;
    await writeProducts(products);
    res.json(updated);
  } catch (error) { next(error); }
});

app.delete("/api/products/:id", authenticateAdmin, async (req, res, next) => {
  try {
    const products = await readProducts();
    const remainingProducts = products.filter((product) => product.id !== req.params.id);
    if (remainingProducts.length === products.length) return res.status(404).json({ message: "Product not found." });
    await writeProducts(remainingProducts);
    res.status(204).end();
  } catch (error) { next(error); }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong on the server." });
});

app.listen(port, () => console.log(`API running at http://localhost:${port}`));
