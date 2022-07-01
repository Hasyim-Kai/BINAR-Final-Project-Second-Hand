import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserNavbar from "./components/UserNavbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SellerProductPage from "./pages/SellerProductPage";
import NewProductPage from "./pages/NewProductPage";
import NotFound from "./pages/NotFound";
import SellerProductOrder from "./pages/SellerProductOrder";
import BuyerDetailProductPage from "./pages/BuyerDetailProductPage";
import SellerDetailProductPage from "./pages/SellerDetailProductPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <LoginNavbar /> */}
      <UserNavbar />
      <main>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route index element={<HomePage />} />
          <Route path="new-product" element={<NewProductPage />} />
          <Route path="product/:id" element={<BuyerDetailProductPage />} />
          <Route path="my-product/:id" element={<SellerDetailProductPage />} />
          <Route path="my-order" element={<SellerProductOrder />} />
          <Route path="offer" element={<SellerProductPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
