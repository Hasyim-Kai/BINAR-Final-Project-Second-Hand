import { Link } from "react-router-dom";
import { ConvertToRupiah } from "../utility/ConvertToRupiah";

export default function ProductItem({
  id = 0,
  name = "null",
  img = "/images/cat.jpg",
  category,
  price = 0,
  isMine = false,
  interested,
}) {
  return (
    <>
      <Link
        to={
          interested
            ? "/my-order/" + id
            : isMine
            ? "/my-product/" + id
            : "/product/" + id
        }
      >
        <div className="p-2 border-2 border-gray-100 rounded-md w-full hover:shadow-lg hover:shadow-purple-100 transition-all duration-300">
          <div className="overflow-hidden rounded-md mb-2">
            <img className="object-cover h-28 w-full" src={img} alt="cat" />
          </div>
          <h1 className="text-xl font-normal mb-1">{name}</h1>
          <p className="text-sm text-gray-400 mb-1">{category}</p>
          <h2 className="font-medium mb-2">{ConvertToRupiah(price)}</h2>
        </div>
      </Link>
    </>
  );
}
