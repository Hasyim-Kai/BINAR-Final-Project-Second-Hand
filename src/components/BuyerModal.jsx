import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IdentityCard from "../components/IdentityCard";
import PurpleButton from "../components/PurpleButton";
import { postTransaction } from "../redux/action/transactionAction";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";

export default function BuyerModal({
  id,
  modalState = false,
  closeModal = () => {},
  nama = "null",
  harga = "null",
  image = "/images/cat.jpg",
}) {
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    closeModal();
    const hargaData = {
      harga: data,
    };
    dispatch(postTransaction(id, hargaData, navigate));
  };

  return (
    <div
      className={`${
        modalState ? "block" : "hidden"
      } absolute top-0 w-full h-full bg-black/80 z-30`}
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
          name={nama}
          city={ConvertToRupiah(harga)}
          additionalStyle="bg-gray-200"
          img={image[0].img_url}
        />

        <form onSubmit={submit}>
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
