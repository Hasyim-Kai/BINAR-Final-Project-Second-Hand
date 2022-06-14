import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import PurpleButton from "../components/PurpleButton";
import IdentityCard from "../components/IdentityCard";

export default function BuyerModal({ modalState = false, closeModal = () => { } }) {
    const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`

    return <div className={`${modalState ? 'block' : 'hidden'} absolute top-0 w-full h-full bg-black/80`}>
        {/* MODAL CARD */}
        <section className={`${modalState ? 'block' : 'hidden'} relative max-w-xs p-5 mx-auto mt-20 rounded-xl bg-white`}>
            <button className="absolute right-7" onClick={closeModal}><b>X</b></button>
            <h3 className="mt-8"><b>Masukkan Harga Tawaranmu</b></h3>
            <p className="mt-3 mb-4 text-sm text-gray-500">Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
            <IdentityCard namaPenjual="Nama Barang" kota={ConvertToRupiah(250000)} additionalStyle='bg-gray-200' />

            <form >
                <div>
                    <label>Harga Tawar</label><br />
                    <input className={inputStyle} type="number" name="hargaTawar" placeholder="Rp. 0.00" required />
                </div>

                <PurpleButton text='Kirim' additionalStyles="text-sm w-full mt-5" />
            </form>


        </section>
    </div>

}