import { ConvertToRupiah } from "../utility/ConvertToRupiah";

export default function SellerOrderItem({ paramIsOrderAccepted = false, modalFunction = () => { }, acceptOrRefuseFunction = () => { } }) {
    return <section className="flex flex-col">

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

        {paramIsOrderAccepted ? <div className="flex flex-wrap gap-5 ml-auto">
            <button onClick={modalFunction} className="border border-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium">Status</button>
            <button className={`text-sm px-6 py-1.5 text-white bg-primaryPurple rounded-2xl flex gap-3 items-center justify-evenly`}>Hubungi di <img src='/icons/fi_whatsapp.svg' alt="wa" /></button>
        </div> : <div className="flex flex-wrap gap-5 ml-auto">
            <button className="border border-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium">Tolak</button>
            <button onClick={modalFunction} className="bg-primaryPurple rounded-2xl px-14 py-1.5 text-sm font-medium text-white">Terima</button>
        </div>}

    </section>
}