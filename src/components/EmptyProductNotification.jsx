export default function EmptyProductNotification({ isOnGrid = false }) {
    return <div className={`flex flex-col items-center gap-5 w-full my-24 ${isOnGrid ? 'col-span-6' : ''}`}>
        <img src="/images/seller_product_empty.png" alt="Empty Product" />
        <h1 className="font-semibold text-3xl text-gray-500">Produk kosong</h1>
    </div>
}