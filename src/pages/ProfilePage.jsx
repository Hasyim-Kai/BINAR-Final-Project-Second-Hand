import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import FailAlert from "../components/FailAlert";
import { UpdateProfile } from "../redux/action/authAction";
import { countryAction } from "../redux/action/countryAction";
import { HandleUploadImages } from "../utility/HandleUploadImages";
import useForm from "../utility/UseForm";

export default function ProfilePage() {
  // const form = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state;
  const [alert, setAlert] = useState(false);
  const [nameCity, setNameCity] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;
  const [preview, setPreview] = useState("/images/default_profile_photo.png");

  const { country } = useSelector((state) => state.countryReducer);

  const [name, setName] = useState(data.name);
  const [phoneNumber, setPhoneNumber] = useState(data.phone_number);
  const [address, setAddress] = useState(data.address);
  const [cityId, setCityId] = useState(data.city_id);

  // console.log("tangkap data", data);

  // const [form, setForm] = useForm({
  //   name: data.name,
  //   phone_number: data.phone_number,
  //   address: data.address,
  //   city_id: data.city_id,
  // });

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    console.log(country);
    dispatch(countryAction(nameCity));

    if (!selectedFile) {
      return;
    }

    // if (data.img_url == null) {
    //   setPreview(data.img_url);
    // }

    // show image after select
    let objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    console.log(selectedFile);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
    // console.log(preview);
  }, [selectedFile, countryAction]);

  // const getIdCity = (e) => {
  //   setNameCity(e.target.value);
  // };
  const submit = (e) => {
    e.preventDefault();
    const form = {
      name: name,
      phone_number: phoneNumber,
      address: address,
      city_id: cityId,
    };
    dispatch(UpdateProfile({ form, selectedFile }));
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            // value={form.name}
            // onChange={(e) => form("name", e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label>Kota</label>
          <br />

          {console.log("isi nama city", cityId)}
          <select
            onChange={(e) => setCityId(e.target.value)}
            className={inputStyle}
            placeholder="Kota Anda"
          >
            {/* <option value={null}>Kota Anda</option> */}
            {country.map((item) => (
              <option value={item.id}>{item.nama_kota}</option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label>Alamat</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="address"
            placeholder="Alamat Anda"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            // value={form.address}
            // onChange={(e) => setForm("address", e.target.value)}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            // value={form.phone_number}
            // onChange={(e) => setForm("phone_number", e.target.value)}
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
