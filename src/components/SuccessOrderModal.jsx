import { useSelector } from "react-redux";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";

export default function SuccessOrderModal({ modalState = false, closeModal = () => { } }) {
    const { interestDetailData } = useSelector((state) => state.interestReducer);

    return <div className={`${modalState ? 'block' : 'hidden'} absolute top-0 w-full h-full bg-black/80 z-50`}>
        {/* MODAL CARD */}
        <section className={`${modalState ? 'block' : 'hidden'} relative max-w-xs p-5 mx-auto mt-20 rounded-xl bg-white`}>
            <button className="absolute right-7" onClick={closeModal}><b>X</b></button>
            <h3 className="mt-8 text-sm"><b>Yeay kamu berhasil mendapat harga yang sesuai</b></h3>
            <p className="mt-1 mb-4 text-sm text-gray-500">Segera hubungi pembeli melalui Whatsapp untuk transaksi selanjutnya</p>

            {/* GRAY CARD AREA */}
            <div className={`bg-gray-200 border rounded-2xl p-4 flex flex-col gap-4 mb-5`}>
                <h3 className="text-center text-sm font-medium">Product Match</h3>

                <div className="flex items-center gap-4">
                    <div className="overflow-hidden rounded-xl">
                        <img className="object-cover h-12 w-12"
                        src={interestDetailData.penawar.profile.img_url === null ? 
                        '/images/default_profile_photo.png' 
                        : interestDetailData.penawar.profile.img_url} alt="Profile" />
                    </div>
                    <div>
                        <h1 className="font-semibold mb-1">{interestDetailData.penawar.profile.name}</h1>
                        <p className="text-gray-500 text-xs">{interestDetailData.penawar.profile.kotum.nama_kota}</p>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="overflow-hidden w-12 h-12 rounded-xl">
                        <img className={`object-cover w-full h-full`} src={interestDetailData.product.pictures[0].img_url} alt="cat" />
                    </div>

                    <div>
                        <h1 className="text-sm mb-1">{interestDetailData.product.nama}</h1>
                        <h1 className="text-sm mb-1 line-through">{ConvertToRupiah(interestDetailData.product.harga)}</h1>
                        <h1 className="text-sm mb-1">Ditawar {ConvertToRupiah(interestDetailData.harga_tawar)}</h1>
                    </div>
                </div>
            </div>

            <button className={`text-sm w-full px-3 py-2.5 text-white bg-primaryPurple rounded-2xl flex items-center justify-evenly`}>Hubungi via Whatsapp <img src='/icons/fi_whatsapp.svg' alt="wa" /></button>
        </section>
    </div>

}