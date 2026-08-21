import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/Home";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Login from "./components/layout/Login";
import Signup from "./components/layout/Signup";
import Contact from "./components/pages/Contact/Contact";
import Offers from "./components/pages/Offer/Offer";
import Gallery from "./components/pages/Gallery/Gallery";
import Menu from "./components/pages/MenuBar/Menu";
import OrderPage from "./components/pages/Order/OrderPage";
import ProductDetail from "./components/pages/Product/ProductDetail";
import CartPage from "./components/pages/Cart/CartPage";
import CheckoutPage from "./components/pages/Checkout/CheckoutPage";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import FooterDetailPage from "./components/pages/FooterPages/FooterDetailPage";
import { footerPageLinks } from "./components/pages/FooterPages/footerPagesData";
import AdminDashboard from "./components/pages/Admin/AdminDashboard";

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
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
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
    </Routes>
  );
}

export default App;
