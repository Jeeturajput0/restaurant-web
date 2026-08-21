const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${apiUrl}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  const body = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(body?.message || "Request failed. Please try again.");
  return body;
};

export const loginAdmin = (credentials) => request("/auth/admin/login", { method: "POST", body: JSON.stringify(credentials) });
export const getAdminProducts = () => request("/products");
export const getProducts = getAdminProducts;
export const saveAdminProduct = (product, token) => request(product.id ? `/products/${product.id}` : "/products", {
  method: product.id ? "PUT" : "POST",
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify(product),
});
export const deleteAdminProduct = (id, token) => request(`/products/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
