import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Login from "./components/layout/Login";
import Signup from "./components/layout/Signup";
import Contact from "./components/pages/Contact/Contact";
import Offers from "./components/pages/Offer/Offer";
import Gallery from "./components/pages/Gallery/Gallery";
import Menu from "./components/pages/MenuBar/Menu";
import ProductDetail from "./components/pages/Product/ProductDetail";
import CartPage from "./components/pages/Cart/CartPage";
import CheckoutPage from "./components/pages/Checkout/CheckoutPage";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import FooterDetailPage from "./components/pages/FooterPages/FooterDetailPage";
import { footerPageLinks } from "./components/pages/FooterPages/footerPagesData";
import CustomerOrders, { TrackOrder } from "./components/customer/CustomerOrders";
import CustomerReservations from "./components/customer/CustomerReservations";
import Wishlist from "./components/customer/Wishlist";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";
import Products from "./components/admin/Products";
import Categories from "./components/admin/Categories";
import Customers from "./components/admin/Customers";
import Tables from "./components/admin/Tables";
import Reservations from "./components/admin/Reservations";
import Payments from "./components/admin/Payments";
import Revenue from "./components/admin/Revenue";
import Coupons from "./components/admin/Coupons";
import Reviews from "./components/admin/Reviews";
import Notifications from "./components/admin/Notifications";
import Settings from "./components/admin/Settings";
import AdminProfile from "./components/admin/AdminProfile";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menubar" element={<Menu />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<CustomerOrders />} />
        <Route path="/track/:id" element={<TrackOrder />} />
        <Route path="/reservations" element={<CustomerReservations />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/order" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/restaurants" element={<Restaurant />} />
        {footerPageLinks
          .filter((link) => !["/menu", "/contact"].includes(link.path))
          .map((link) => (
            <Route key={link.path} path={link.path} element={<FooterDetailPage />} />
          ))}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="customers" element={<Customers />} />
        <Route path="tables" element={<Tables />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="payments" element={<Payments />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="offers" element={<Coupons />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
