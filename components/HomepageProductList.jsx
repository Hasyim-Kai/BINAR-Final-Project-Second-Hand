
import { useState } from "react";
import Loading from "../components/Loading";
import SearchButton from "../components/SearchButton";
import SecondarySearchButton from "../components/SecondarySearchButton";
import ProductItem from "../components/ProductItem";

export default function HomepageProductList() {
   const filterBtn = ['Semua', 'Hobi', 'Kendaraan', 'Baju', 'Elektronik', 'Kesehatan']
   const [category, setCategory] = useState('Semua')

   function onCategoryChange(categoryName) { setCategory(categoryName); }

   return <><section className="container mx-auto px-2 my-10">
      <h1><b>Telusuri Kategori</b></h1>
      <div className="flex gap-5 mt-3 flex-wrap">
         {filterBtn.map(item => (category) === item
            ? <SearchButton text={item} anyFunction={onCategoryChange} key={item} />
            : <SecondarySearchButton text={item} anyFunction={onCategoryChange} key={item} />)}
      </div>
   </section>

      {/* ITEM LIST */}
      <section className="container mx-auto px-2 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-3">
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
         <ProductItem name="Jam Tangan" category="Aksesoris" price={250000} />
      </section></>
}