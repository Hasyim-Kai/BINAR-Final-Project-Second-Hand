import JwtDecode from "../utility/JwtDecode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SellButton from "../components/SellButton";
import HomePageBanner from "../components/HomePageBanner";
import HomepageProductList from "../components/HomepageProductList";

export default function HomePage() {
  const dispatch = useDispatch();
  const { dataLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (dataLogin !== null) {
      console.log("Data Login Kosong");
      const token = localStorage.getItem("user:token");
      dispatch({
        type: "SET_DATA_LOGIN",
        payload: JwtDecode(token),
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* BANNER */}
      <HomePageBanner />

      {/* CATEGORY */}
      <HomepageProductList />

      {/* SELL BUTTON */}
      <SellButton />
    </div>
  );
}
