import React, { useEffect, useState } from "react";
import { Edit3, LogOut, PackagePlus, Trash2 } from "lucide-react";
import { deleteAdminProduct, getAdminProducts, loginAdmin, saveAdminProduct } from "../../../lib/api";
import { formatCurrency } from "../../../lib/menu";
import Button from "../../ui/Button";
import Field from "../../ui/Field";

const emptyProduct = { name: "", description: "", category: "", price: "", image: "", rating: "4.5", deliveryTime: "25-30 min", badge: "" };

const AdminDashboard = () => {
  const [token, setToken] = useState(() => localStorage.getItem("eatmore_admin_token") || "");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(emptyProduct);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    try { setProducts(await getAdminProducts()); }
    catch (requestError) { setError(requestError.message); }
  };

  useEffect(() => { if (token) loadProducts(); }, [token]);

  const updateProduct = (event) => setProduct((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleLogin = async (event) => {
    event.preventDefault(); setLoading(true); setError("");
    try {
      const response = await loginAdmin(credentials);
      localStorage.setItem("eatmore_admin_token", response.token);
      setToken(response.token);
    } catch (requestError) { setError(requestError.message); }
    finally { setLoading(false); }
  };

  const handleSave = async (event) => {
    event.preventDefault(); setLoading(true); setError(""); setMessage("");
    try {
      await saveAdminProduct(product, token);
      setProduct(emptyProduct); setMessage("Dish saved successfully."); await loadProducts();
    } catch (requestError) { setError(requestError.message); }
    finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this dish? This cannot be undone.")) return;
    try { await deleteAdminProduct(id, token); setMessage("Dish deleted."); await loadProducts(); }
    catch (requestError) { setError(requestError.message); }
  };

  const logout = () => { localStorage.removeItem("eatmore_admin_token"); setToken(""); setProducts([]); };

  if (!token) return (
    <section className="page-section"><div className="theme-container max-w-lg"><form onSubmit={handleLogin} className="theme-card space-y-5 p-6 sm:p-8">
      <div><p className="theme-pill">Admin access</p><h1 className="mt-4 text-3xl font-semibold text-slate-950">Dashboard login</h1><p className="mt-2 text-sm leading-6 text-slate-600">Sign in with the admin credentials configured in the backend environment file.</p></div>
      <Field label="Email" type="email" value={credentials.email} onChange={(event) => setCredentials((current) => ({ ...current, email: event.target.value }))} required />
      <Field label="Password" type="password" value={credentials.password} onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))} required />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}<Button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
    </form></div></section>
  );

  return (
    <section className="page-section pb-20"><div className="theme-container space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="theme-pill">Admin dashboard</p><h1 className="mt-3 text-3xl font-semibold text-slate-950">Manage dishes</h1><p className="mt-2 text-slate-600">Add, edit or remove dishes from your restaurant menu.</p></div><Button type="button" variant="secondary" onClick={logout} className="gap-2"><LogOut className="h-4 w-4" />Logout</Button></div>
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSave} className="theme-card grid gap-4 p-6 sm:p-8"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold text-slate-950">{product.id ? "Edit dish" : "Add a dish"}</h2>{product.id ? <button type="button" onClick={() => setProduct(emptyProduct)} className="text-sm text-amber-600">Cancel edit</button> : null}</div>
          <Field label="Dish name" name="name" value={product.name} onChange={updateProduct} required /><Field label="Description" name="description" as="textarea" rows="3" value={product.description} onChange={updateProduct} required />
          <div className="grid gap-4 sm:grid-cols-2"><Field label="Category" name="category" value={product.category} onChange={updateProduct} required /><Field label="Price (₹)" name="price" type="number" min="0" value={product.price} onChange={updateProduct} required /></div>
          <Field label="Image URL" name="image" type="url" value={product.image} onChange={updateProduct} required /><div className="grid gap-4 sm:grid-cols-2"><Field label="Rating" name="rating" type="number" min="1" max="5" step="0.1" value={product.rating} onChange={updateProduct} /><Field label="Delivery time" name="deliveryTime" value={product.deliveryTime} onChange={updateProduct} /></div><Field label="Badge (optional)" name="badge" value={product.badge} onChange={updateProduct} />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}{message ? <p className="text-sm text-emerald-700">{message}</p> : null}<Button type="submit" disabled={loading} className="gap-2"><PackagePlus className="h-4 w-4" />{loading ? "Saving..." : product.id ? "Update dish" : "Add dish"}</Button>
        </form>
        <div className="space-y-4"><h2 className="text-xl font-semibold text-slate-950">Added dishes ({products.length})</h2>{products.length === 0 ? <div className="theme-card p-8 text-slate-600">No dishes added yet. Use the form to add your first dish.</div> : products.map((item) => <article key={item.id} className="theme-card flex gap-4 p-4"><img src={item.image} alt="" className="h-24 w-24 rounded-xl object-cover" /><div className="min-w-0 flex-1"><p className="font-semibold text-slate-950">{item.name}</p><p className="mt-1 text-sm text-slate-600">{item.category} · {formatCurrency(item.price)}</p><p className="mt-2 line-clamp-2 text-sm text-slate-500">{item.description}</p></div><div className="flex flex-col gap-2"><button type="button" onClick={() => setProduct(item)} className="rounded-lg bg-amber-50 p-2 text-amber-600" aria-label={`Edit ${item.name}`}><Edit3 className="h-4 w-4" /></button><button type="button" onClick={() => handleDelete(item.id)} className="rounded-lg bg-red-50 p-2 text-red-600" aria-label={`Delete ${item.name}`}><Trash2 className="h-4 w-4" /></button></div></article>)}</div>
      </div>
    </div></section>
  );
};

export default AdminDashboard;
