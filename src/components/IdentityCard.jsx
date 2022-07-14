import { Link } from "react-router-dom";
import image from "../img-default.jfif";

export default function IdentityCard({
  isEditEnabled = false,
  additionalStyle = "",
  img = image,
  name,
  city,
}) {
  return (
    <div
      className={`border rounded-xl p-4 flex items-center gap-4 mb-7 ${additionalStyle}`}
    >
      <div className="overflow-hidden rounded-xl">
        <img className="object-cover h-14 w-14" src={img} alt="cat" />
      </div>

      <div>
        <h1 className="font-semibold mb-1">{name}</h1>
        <p className="text-gray-500 text-xs">{city}</p>
      </div>

      {isEditEnabled && (
        <Link
          className="ml-auto border border-primaryPurple rounded-lg px-3"
          to="/profile"
        >
          Edit
        </Link>
      )}
    </div>
  );
}
