import IdentityCard from "../components/IdentityCard";
import PurpleButton from "../components/PurpleButton";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";
import { useParams } from "react-router-dom";
export default function SellerDetailProductPage() {
    let { id } = useParams();

    return <div className="min-h-screen max-w-4xl mx-auto grid  grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
        <section className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-500">
                <img className="object-cover h-[25rem] w-full" src="/images/cat.jpg" alt="cat" />
            </div>
            <div className="border rounded-xl p-4 mt-5">
                <h1 className="mb-2"><b>Deskripsi</b></h1>
                <p>Product Id {id}</p>
            </div>

        </section>

        <section className="flex flex-col">
            <div className="border rounded-xl p-4 mb-5">
                <h1 className="text-xl font-semibold">Jam Tangan Casio</h1>
                <p className="text-gray-500 mt-1">Accesoris</p>
                <h1 className="text-xl font-semibold mt-3">{ConvertToRupiah(250000)}</h1>
                <PurpleButton text='Terbitkan' additionalStyles="text-sm w-full mt-5" />
                <button className="w-full h-10 rounded-xl border border-primaryPurple mt-2">Edit</button>
            </div>

            <IdentityCard namaPenjual="Sugiono" kota="Japan" />
        </section>
    </div>
}