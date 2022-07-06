import { useState } from "react";
import IdentityCard from "../components/IdentityCard";
import PurpleButton from "../components/PurpleButton";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";

export default function BuyerModal({modalState = false, closeModal = () => {}, nama, harga, image}) {
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;
  const [data, setData] = useState("");

  return (
    <div
      className={`${
        modalState ? "block" : "hidden"
      } absolute z-50 top-0 w-full h-full bg-black/80`}
    >
      {/* MODAL CARD */}
      <section
        className={`${
          modalState ? "block" : "hidden"
        } relative max-w-xs p-5 mx-auto mt-20 rounded-xl bg-white`}
      >
        <button className="absolute right-7" onClick={closeModal}>
          <b>X</b>
        </button>
        <h3 className="mt-8">
          <b>Masukkan Harga Tawaranmu</b>
        </h3>
        <p className="mt-3 mb-4 text-sm text-gray-500">
          Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
          segera dihubungi penjual.
        </p>
        <IdentityCard
          namaPenjual={nama}
          kota={ConvertToRupiah(harga)}
          additionalStyle="bg-gray-200"
          image={image[0].img_url}
        />

        <form>
          <div>
            <label>Harga Tawar</label>
            <br />
            <input
              className={inputStyle}
              type="number"
              name="hargaTawar"
              placeholder="Rp. 0.00"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <PurpleButton text="Kirim" additionalStyles="text-sm w-full mt-5" />
        </form>
      </section>
    </div>
  );
}
