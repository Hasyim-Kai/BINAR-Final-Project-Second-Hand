
export default function OrderStatusModal({ modalState = false, closeModal = () => { } }) {
    return <div className={`${modalState ? 'block' : 'hidden'} absolute z-50 top-0 w-full h-full bg-black/80 z-50`}>
        {/* MODAL CARD */}
        <section className={`${modalState ? 'block' : 'hidden'} relative max-w-xs p-5 mx-auto mt-20 rounded-xl bg-white`}>
            <button className="absolute right-7" onClick={closeModal}><b>X</b></button>
            <h3 className="mt-8 mb-4 text-sm"><b>Perbarui status penjualan produkmu</b></h3>

            <form>
                <div className="flex gap-3 items-start mb-4">
                    <input id="berhasil" type="radio" name="status_transaksi" className="w-6 h-6" value={true} required/>
                    <div>
                        <label htmlFor="berhasil" className="text-sm font-medium">Berhasil terjual</label>
                        <p className="text-sm text-gray-500">Kamu telah sepakat menjual produk ini kepada pembeli</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <input id="batal" type="radio" name="status_transaksi" className="w-6 h-6" value={false} required/>
                    <div>
                        <label htmlFor="batal" className="text-sm font-medium">Batalkan transaksi</label>
                        <p className="text-sm text-gray-500">Kamu membatalkan transaksi produk ini dengan pembeli</p>
                    </div>
                </div>

                <button className={`mt-7 text-sm w-full px-3 py-2.5 text-white bg-primaryPurple rounded-2xl`}>Kirim</button>
            </form>

        </section>
    </div>

}