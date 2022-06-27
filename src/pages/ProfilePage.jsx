import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FailAlert from "../components/FailAlert";
import { GetProfile } from "../redux/action/authAction";
import { countryAction } from "../redux/action/countryAction";
import { HandleUploadImages } from "../utility/HandleUploadImages";
import useForm from "../utility/UseForm";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;
  const [preview, setPreview] = useState("/images/default_profile_photo.png");
  const [selectedFile, setSelectedFile] = useState();
  const [alert, setAlert] = useState(false);
  const [nameCity, setNameCity] = useState("");
  const { country } = useSelector((state) => state.countryReducer);
  const { dataGetProfile } = useSelector((state) => state.authReducer);
  console.log("isi data user", dataGetProfile);

  const [form, setForm] = useForm({
    name: "",
    phone_number: "",
    address: "",
    profile_pict: "",
    city_id: "",
  });

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    dispatch(GetProfile());
    dispatch(countryAction());
    if (!selectedFile) {
      return;
    }
    let objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const getIdCity = (e) => {
    setNameCity(e.target.value);
    console.log("isi nama get IDcity:", nameCity);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="min-h-screen max-w-4xl mx-auto relative flex flex-col items-center gap-4 pt-10">
      {/* show alert */}
      {alert && (
        <FailAlert
          showAlert={true}
          message={"Cannot upload files more than 1 MB"}
        />
      )}

      <h1 className="mb-5 text-xl">Lengkapi Info Akun</h1>
      <label htmlFor="profilePhoto" className="cursor-pointer">
        <div className="overflow-hidden w-28 h-28 rounded-xl hover:scale-110 transition-all duration-300">
          <img
            className={`object-cover h-full w-full`}
            src={preview}
            alt="cat"
          />
        </div>

        {/* UPLOAD IMAGE PROFILE */}
        <input
          onChange={(e) =>
            HandleUploadImages(e, setSelectedFile, () => setAlert(true))
          }
          className="hidden"
          type="file"
          name="profilePhoto"
          accept="image/*"
          id="profilePhoto"
        />
      </label>
      {/* START FORM DATA PROFILE */}
      <form className="w-3/5 mt-10 mb-24" onSubmit={submit}>
        <div className="mb-5">
          <label>Nama</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={form.name}
            onChange={(e) => setForm("name", e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label>Kota</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            placeholder="Kota Anda"
            list="country"
            name="country"
            value={nameCity}
            onChange={(e) => getIdCity(e)}
          />

          {console.log("isi nama city", nameCity)}

          <datalist id="country">
            {country.map((item, key) => (
              <>
                <option key={key} value={item.nama_kota} />
              </>
            ))}
          </datalist>
        </div>

        <div className="mb-5">
          <label>Alamat</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="address"
            placeholder="Alamat Anda"
            value={form.address}
            onChange={(e) => setForm("address", e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label>No Handphone</label>
          <br />
          <input
            className={inputStyle}
            type="number"
            name="phone_number"
            placeholder="Contoh: 08968888123"
            pattern="{6,}"
            value={form.phone_number}
            onChange={(e) => setForm("phone_number", e.target.value)}
          />
        </div>

        <button
          className={`h-10 py-2 px-3 text-white bg-primaryPurple rounded-xl w-full`}
        >
          Simpan
        </button>
      </form>
      {/* END FORM DATA PROFILE */}
      <Link className="absolute left-28" to="/">
        <img src="/icons/fi_arrow-left.svg" alt="arrow left" />
      </Link>
    </div>
  );
}
