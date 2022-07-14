import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function IdentityCard({
  isEditEnabled = false,
  additionalStyle = "",
}) {

  const { dataGetProfile } = useSelector((state) => state.authReducer);

  return (
    <div
      className={`border rounded-xl p-4 flex items-center gap-4 mb-7 ${additionalStyle}`}
    >
      <div className="overflow-hidden rounded-xl">
        <img className="object-cover h-14 w-14" src={dataGetProfile.img_url} alt="cat" />
      </div>

      <div>
        <h1 className="font-semibold mb-1">{dataGetProfile.name}</h1>
        <p className="text-gray-500 text-xs">{dataGetProfile.kota}</p>
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
