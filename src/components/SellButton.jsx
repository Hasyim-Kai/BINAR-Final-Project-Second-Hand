import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SellButton() {
  const { sellerProductList } = useSelector((state) => state.productReducer);
  const token = localStorage.getItem("user:token");

  return sellerProductList.length >= 4 ? (
    <></>
  ) : (
    <Link to={token === null ? "/login" : "/new-product"}>
      <button
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 flex 
    items-center gap-4 py-3 px-5 text-white text-sm bg-primaryPurple rounded-lg 
    shadow-xl shadow-purple-400 hover:scale-110 transition-all duration-300`}
      >
        <img src="/icons/fi_plus.svg" alt="plus" /> Jual
      </button>
    </Link>
  );
}
