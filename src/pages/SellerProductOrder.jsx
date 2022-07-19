import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderStatusModal from "../components/OrderStatusModal";
import SuccessOrderModal from "../components/SuccessOrderModal";
import { acceptOrRefuseTransaction } from "../redux/action/transactionAction";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import { DateFormat } from "../utility/DateFormat";

export default function SellerProductOrder() {
  const dispatch = useDispatch();
  const { interestDetailData } = useSelector((state) => state.interestReducer);
  const [isModalOrderSucceedOpen, setIsModalOrderSucceedOpen] = useState(false);
  const [isOrderAccepted, setIsOrderAccepted] = useState(false);
  const [isModalOrderAcceptedOpen, setIsModalOrderAcceptedOpen] =
    useState(false);

  function openCloseOrderSucceedModal() {
    setIsModalOrderSucceedOpen(!isModalOrderSucceedOpen);
  }
  function openCloseOrderAcceptedModal() {
    setIsModalOrderAcceptedOpen(!isModalOrderAcceptedOpen);
  }

  function acceptTransaction() {
    setIsOrderAccepted(true);
    openCloseOrderAcceptedModal();
    dispatch(acceptOrRefuseTransaction(interestDetailData.id, true));
  }

  function refuseTransaction() {
    console.log(`Tolak Transaksi`);
    dispatch(acceptOrRefuseTransaction(interestDetailData.id, false));
  }

  return (
    <div className="min-h-screen w-full relative">
      {isModalOrderSucceedOpen && (
        <OrderStatusModal
          modalState={isModalOrderSucceedOpen}
          closeModal={openCloseOrderSucceedModal}
        />
      )}
      {isModalOrderAcceptedOpen && (
        <SuccessOrderModal
          modalState={isModalOrderAcceptedOpen}
          closeModal={openCloseOrderAcceptedModal}
        />
      )}

      <section className="max-w-xl mx-auto relative flex flex-col py-10">
        <Link className="absolute -left-28" to="/offer">
          <img src="/icons/fi_arrow-left.svg" alt="arrow left" />
        </Link>
        <h1 className="mb-3 text-center text-lg font-normal">Info Penawar</h1>

        {/* PENAWAR */}
        <div
          className={`border rounded-xl p-4 flex items-center gap-4 mb-7 w-full`}
        >
          <div className="overflow-hidden rounded-xl">
            <img
              className="object-cover h-14 w-14"
              src={
                interestDetailData.penawar.profile?.img_url === null
                  ? "/images/default_profile_photo.png"
                  : interestDetailData.penawar.profile?.img_url
              }
              alt="Profile"
            />
          </div>

          <div>
            <h1 className="font-semibold mb-1">
              {interestDetailData.penawar.profile.name}
            </h1>
            <p className="text-gray-500 text-xs">
              {interestDetailData.penawar.profile.kotum.nama_kota}
            </p>
          </div>
        </div>

        <h1 className="mb-7 font-medium">Daftar Produkmu yang Ditawar</h1>

        {/* <SellerOrderItem modalFunction={openCloseModal} paramIsOrderAccepted={isOrderAccepted} /> */}
        <section className="flex flex-col">
          <div className="flex gap-5 mb-4">
            <div className="overflow-hidden w-12 h-12 rounded-xl">
              <img
                className={`object-cover w-full h-full`}
                src={interestDetailData.product.pictures[0].img_url}
                alt="ProductImage"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Penawaran Produk</p>
              <h1 className="">{interestDetailData.product.nama}</h1>
              <h1 className="">
                {ConvertToRupiah(interestDetailData.product.harga)}
              </h1>
              <h1 className="">
                Ditawar {ConvertToRupiah(interestDetailData.harga_tawar)}
              </h1>
            </div>
            <p className="text-sm text-gray-500 ml-auto">
              {DateFormat(interestDetailData.createdAt)}
            </p>
          </div>

          {isOrderAccepted ? (
            <div className="flex flex-wrap gap-5 ml-auto">
              <button
                onClick={openCloseOrderSucceedModal}
                className="border border-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium"
              >
                Status
              </button>
              <button
                className={`text-sm px-6 py-1.5 text-white bg-primaryPurple rounded-2xl flex gap-3 items-center justify-evenly`}
              >
                Hubungi di <img src="/icons/fi_whatsapp.svg" alt="wa" />
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-5 ml-auto">
              <Link to="/offer">
                <button
                  onClick={refuseTransaction}
                  className="border border-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium"
                >
                  Tolak
                </button>
              </Link>
              <button
                onClick={acceptTransaction}
                className="bg-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium text-white"
              >
                Terima
              </button>
            </div>
          )}
        </section>
      </section>
    </div>
  );
}
