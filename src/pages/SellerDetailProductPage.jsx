import IdentityCard from "../components/IdentityCard";
import PurpleButton from "../components/PurpleButton";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailProduct } from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductImageCarousel from "../components/ProductImageCarousel";


export default function SellerDetailProductPage() {
  const dispatch = useDispatch();
  const { SellerDetailProduct } = useSelector((state) => state.productReducer);
  // const image = SellerDetailProduct?.img_url;


  let { id } = useParams();

  useEffect(() => { dispatch(getDetailProduct(id)); }, []);
  return (
    <div className="relative">
    <div className="min-h-screen max-w-4xl mx-auto grid  grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
      <section className="lg:col-span-2">
      <ProductImageCarousel productImages={SellerDetailProduct?.img_url}/>
        <div className="overflow-hidden rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-500">
          <img
            className="object-cover h-[25rem] w-full"
            src="/images/cat.jpg"
            alt="cat"
          />
        </div>
        <div className="border rounded-xl p-4 mt-5">
          <h1 className="mb-2">
            <b>Deskripsi</b>
          </h1>
          <p>{SellerDetailProduct?.deskripsi}</p>
          <p>Product Id {id}</p>
        </div>
      </section>
      {console.log(id)}
      <section className="flex flex-col">
        <div className="border rounded-xl p-4 mb-5">
          <h1 className="text-xl font-semibold">{SellerDetailProduct?.nama}</h1>
          <p className="text-gray-500 mt-1">{SellerDetailProduct?.category}</p>
          <h1 className="text-xl font-semibold mt-3">
            {ConvertToRupiah(250000)}
          </h1>
          <PurpleButton
            text="Terbitkan"
            additionalStyles="text-sm w-full mt-5"
          />
          <button className="w-full h-10 rounded-xl border border-primaryPurple mt-2">
            Edit
          </button>
        </div>

        <IdentityCard namaPenjual="Sugiono" kota="Japan" />
      </section>
    </div>
    </div>
  );
}
