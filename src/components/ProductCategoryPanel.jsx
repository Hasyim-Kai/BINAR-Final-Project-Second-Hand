import { Link } from "react-router-dom";

export default function ProductCategoryPanel() {
   const categoryItemStyle = `flex gap-2 items-center py-4`

   return <section className="border-4 border-gray-100 rounded-xl p-7 w-80 h-fit lg:mx-0 mx-auto">
      <h1 className="text-xl mb-3">Kategori</h1>

      <Link to='/offer'>
         <button className="w-full"><div className={`${categoryItemStyle} border-b-2`}>
               <img src="/icons/fi_box.svg" alt="box" />
               <h1 className="text-lg">Semua Produk</h1>
               <img className="ml-auto" src="/icons/fi_arrow-right.svg" alt="arrow-right" />
            </div></button>
      </Link>      

      <Link to='/my-interested'>
         <button className="w-full"><div className={`${categoryItemStyle} border-b-2`}>
            <img src="/icons/fi_heart.svg" alt="heart" />
            <h1 className="text-lg">Diminati</h1>
            <img className="ml-auto" src="/icons/fi_arrow-right.svg" alt="arrow-right" />
         </div></button>
      </Link>      

      <Link to='/my-wishlist'>
         <button className="w-full"><div className={`${categoryItemStyle} border-b-2`}>
            <img src="/icons/fi_heart.svg" alt="heart" />
            <h1 className="text-lg">Wishlist</h1>
            <img className="ml-auto" src="/icons/fi_arrow-right.svg" alt="arrow-right" />
         </div></button>
      </Link>      

      <Link to='/my-sold'>
         <button className="w-full"><div className={categoryItemStyle}>
            <img src="/icons/fi_dollar-sign.svg" alt="dollar-sign" />
            <h1 className="text-lg">Terjual</h1>
            <img className="ml-auto" src="/icons/fi_arrow-right.svg" alt="arrow-right" />
         </div></button>
      </Link>      

   </section >;
}