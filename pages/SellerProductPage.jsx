import { Link } from "react-router-dom";
import IdentityCard from "../components/IdentityCard";
import ProductCategoryPanel from "../components/ProductCategoryPanel";
import ProductItem from "../components/ProductItem";

export default function SellerProductPage() {
    return <div className="min-h-screen max-w-5xl mx-auto pt-10">
        <h1 className="text-2xl mb-7"><b>Daftar Jual Saya</b></h1>
        <IdentityCard namaPenjual="Sugiono" kota="Japan" isEditEnabled={true} />

        <div className="flex flex-wrap justify-between">
            <ProductCategoryPanel />

            {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"> */}
            <section className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-0 mx-auto">

                <Link to='/new-product'><div className="border-dashed border-2 text-center overflow-hidden w-48 md:w-52 h-full rounded-xl">
                    <img className={`mx-auto mt-20`} src="/icons/grey_fi_plus.svg" alt="plus" />
                    Tambah Produk
                </div></Link>

                <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} isMine={true} />
                <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} isMine={true} />
                <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} isMine={true} />
                <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} isMine={true} />
            </section>
        </div>
    </div>
}