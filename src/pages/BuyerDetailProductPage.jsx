import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductImageCarousel from "../components/ProductImageCarousel";
import BuyerModal from "../components/BuyerModal";
import IdentityCard from "../components/IdentityCard";
import PurpleButton from "../components/PurpleButton";
import { getDetailProduct } from "../redux/action/productAction";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import SuccessAlert from "../components/SuccessAlert";

export default function BuyerDetailProductPage() {
  const dispatch = useDispatch();
  const { buyerDetailProduct } = useSelector((state) => state.productReducer);
  const { isSuccess, messageSuccess } = useSelector(
    (state) => state.globalReducer
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  let { id } = useParams();

  function openCloseModal() {
    setIsModalOpen(!isModalOpen);
  }
  useEffect(() => {
    dispatch(getDetailProduct(id));
    isSuccess == true && openCloseModal();
  }, []);

  return (
    <div className="relative">
      {isSuccess == true && (
        <SuccessAlert showAlert={isSuccess} message={messageSuccess} />
      )}

      <BuyerModal
        id={id}
        modalState={isModalOpen}
        closeModal={openCloseModal}
        nama={buyerDetailProduct?.nama}
        harga={buyerDetailProduct?.harga}
        image={buyerDetailProduct?.img_url}
      />
      <div className="min-h-screen max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
        <section className="lg:col-span-2">
          {buyerDetailProduct.img_url && (
            <ProductImageCarousel productImages={buyerDetailProduct.img_url} />
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
              {ConvertToRupiah(buyerDetailProduct?.harga)}
            </h1>
            <PurpleButton
              // disable
              text="Saya Tertarik dan Ingin Nego"
              additionalStyles="text-sm w-full mt-5"
              onClickFunction={openCloseModal}
            />
          </div>

          <IdentityCard
            namaPenjual={buyerDetailProduct?.seller_name}
            kota={buyerDetailProduct?.seller_kota}
          />
        </section>
      </div>
    </div>
  );
}
