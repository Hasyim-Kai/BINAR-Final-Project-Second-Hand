import { Link } from "react-router-dom";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";

const NotificationItem = ({ isBargained = false }) => <li className="flex gap-5 border-b-2 py-4 first:pt-0 last:border-b-0 last:pb-0">
    {/* <Link to='#' className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Categories</Link> */}

    <div className="overflow-hidden w-12 h-12 rounded-xl">
        <img className={`object-cover w-full h-full`} src='/images/cat.jpg' alt="cat" />
    </div>

    <div>
        <p className="text-sm text-gray-500">Penawaran Produk</p>
        <h1 className="font-medium">Jam Tangan Casio</h1>
        <h1 className="font-medium">{ConvertToRupiah(250000)}</h1>
        {isBargained && <h1 className="font-medium">Ditawar {ConvertToRupiah(200000)}</h1>}
    </div>

    <p className="text-sm text-gray-500 ml-auto">Tanggal </p>
</li>

export default NotificationItem