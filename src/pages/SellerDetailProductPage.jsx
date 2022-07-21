import { useNavigate } from "react-router-dom";
import IdentityCard from "../components/IdentityCard";
import PurpleButton from "../components/PurpleButton";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getDetailProduct,
  publishProduct,
} from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductImageCarousel from "../components/ProductImageCarousel";

export default function SellerDetailProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { buyerDetailProduct } = useSelector((state) => state.productReducer);
  const { dataGetProfile } = useSelector((state) => state.authReducer);

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  function publsihThisProduct() {
    dispatch(publishProduct(id, navigate));
  }

  return (
    <div className="relative">
      <div className="min-h-screen max-w-4xl mx-auto grid  grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
        <section className="lg:col-span-2">
          {buyerDetailProduct.img_url && (
            <ProductImageCarousel productImages={buyerDetailProduct?.img_url} />
          )}

          <div className="border rounded-xl p-4 mt-5">
            <h1 className="mb-2">
              <b>Deskripsi</b>
            </h1>
            <p>{buyerDetailProduct?.deskripsi}</p>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="border rounded-xl p-4 mb-5">
            <h1 className="text-xl font-semibold">
              {buyerDetailProduct?.nama}
            </h1>
            <p className="text-gray-500 mt-1">{buyerDetailProduct?.category}</p>
            <h1 className="text-xl font-semibold mt-3">
              {ConvertToRupiah(250000)}
            </h1>
            <PurpleButton
              text="Terbitkan"
              additionalStyles="text-sm w-full mt-5"
              onClickFunction={publsihThisProduct}
            />
            <button className="w-full h-10 rounded-xl border border-primaryPurple mt-2">
              Edit
            </button>
          </div>

          <IdentityCard
            name={dataGetProfile.name}
            city={dataGetProfile.kota}
            img={dataGetProfile.img_url}
          />
        </section>
      </div>
    </div>
  );
}
