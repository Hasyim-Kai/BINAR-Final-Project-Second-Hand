import { useState } from "react";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import { Link } from "react-router-dom";
import SuccessOrderModal from "../components/SuccessOrderModal";
import OrderStatusModal from "../components/OrderStatusModal";
// import SellerOrderItem from "../components/SellerOrderItem";

export default function SellerProductOrder() {
    // const [isOrderSucceed, setIsOrderSucceed] = useState(false);
    const [isModalOrderSucceedOpen, setIsModalOrderSucceedOpen] = useState(false);
    const [isOrderAccepted, setIsOrderAccepted] = useState(false);
    const [isModalOrderAcceptedOpen, setIsModalOrderAcceptedOpen] = useState(false);

    function openCloseOrderSucceedModal() { setIsModalOrderSucceedOpen(!isModalOrderSucceedOpen); }
    function openCloseOrderAcceptedModal() { setIsModalOrderAcceptedOpen(!isModalOrderAcceptedOpen); }

    function acceptTransaction() { setIsOrderAccepted(true); openCloseOrderAcceptedModal() }
    function refuseTransaction() { console.log(`Tolak Transaksi`)}

    return <div className="min-h-screen w-full relative">
        {isModalOrderSucceedOpen && <OrderStatusModal modalState={isModalOrderSucceedOpen} closeModal={openCloseOrderSucceedModal} />}
        {isModalOrderAcceptedOpen && <SuccessOrderModal modalState={isModalOrderAcceptedOpen} closeModal={openCloseOrderAcceptedModal} />}

        <section className="max-w-xl mx-auto relative flex flex-col py-10">
            <Link className="absolute -left-28" to='/offer'><img src="/icons/fi_arrow-left.svg" alt="arrow left" /></Link>
            <h1 className="mb-3 text-center text-lg font-normal">Info Penawar</h1>

            {/* PENAWAR */}
            <div className={`border rounded-xl p-4 flex items-center gap-4 mb-7 w-full`}>
                <div className="overflow-hidden rounded-xl">
                    <img className="object-cover h-14 w-14" src={`/images/cat.jpg`} alt="cat" />
                </div>

                <div>
                    <h1 className="font-semibold mb-1">Anonym</h1>
                    <p className="text-gray-500 text-xs">City</p>
                </div>

                <Link className="ml-auto border border-primaryPurple rounded-lg px-3" to="/profile">Edit</Link>
            </div>

            <h1 className="mb-7 font-medium">Daftar Produkmu yang Ditawar</h1>

            {/* <SellerOrderItem modalFunction={openCloseModal} paramIsOrderAccepted={isOrderAccepted} /> */}
            <section className="flex flex-col">

                <div className="flex gap-5 mb-4">
                    <div className="overflow-hidden w-12 h-12 rounded-xl">
                        <img className={`object-cover w-full h-full`} src='/images/cat.jpg' alt="cat" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Penawaran Produk</p>
                        <h1 className="">Jam Tangan Casio</h1>
                        <h1 className="">{ConvertToRupiah(250000)}</h1>
                        <h1 className="">Ditawar {ConvertToRupiah(200000)}</h1>
                    </div>
                    <p className="text-sm text-gray-500 ml-auto">Tanggal </p>
                </div>

                {isOrderAccepted ? <div className="flex flex-wrap gap-5 ml-auto">
                    <button onClick={openCloseOrderSucceedModal} className="border border-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium">Status</button>
                    <button className={`text-sm px-6 py-1.5 text-white bg-primaryPurple rounded-2xl flex gap-3 items-center justify-evenly`}>Hubungi di <img src='/icons/fi_whatsapp.svg' alt="wa" /></button>
                </div> : <div className="flex flex-wrap gap-5 ml-auto">
                    <Link to="/my-interested"><button onClick={refuseTransaction} className="border border-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium">Tolak</button></Link>                    
                    <button onClick={acceptTransaction} className="bg-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium text-white">Terima</button>
                </div>}

            </section>
        </section>
    </div>
}