import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessOrderModal from "../components/SuccessOrderModal";
import OrderStatusModal from "../components/OrderStatusModal";
import IdentityCard from "../components/IdentityCard";
import SellerOrderItem from "../components/SellerOrderItem";

export default function SellerProductOrder() {
    const [isOrderAccepted, setIsOrderAccepted] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function openCloseModal() { setIsModalOpen(!isModalOpen); }

    return <div className="min-h-screen w-full relative">
        {isOrderAccepted ? <OrderStatusModal modalState={isModalOpen} closeModal={openCloseModal} />
            : <SuccessOrderModal modalState={isModalOpen} closeModal={openCloseModal} />}

        <section className="max-w-xl mx-auto relative flex flex-col py-10">
            <Link className="absolute -left-28" to='/'><img src="/icons/fi_arrow-left.svg" alt="arrow left" /></Link>
            <h1 className="mb-3 text-center text-lg font-normal">Info Penawar</h1>
            <IdentityCard namaPenjual='Sugiono' kota="Japan" additionalStyle="w-full" />

            <h1 className="mb-7 font-medium">Daftar Produkmu yang Ditawar</h1>

            <SellerOrderItem modalFunction={openCloseModal} paramIsOrderAccepted={isOrderAccepted} />
        </section>
    </div>
}