import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FailAlert from "../components/FailAlert";
import Loading from "../components/Loading";
import { UpdateProfile } from "../redux/action/authAction";
import { countryAction } from "../redux/action/countryAction";
import { HandleUploadImages } from "../utility/HandleUploadImages";

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const token = localStorage.getItem("user:token");
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;
  const [imgUrl, setImgUrl] = useState("");
  const { country } = useSelector((state) => state.countryReducer);
  const { dataGetProfile } = useSelector((state) => state.authReducer);
  const isLoading = useSelector((state) => state.globalReducer.isLoading);

  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city_id, setCityId] = useState("");
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    dispatch(countryAction());

    if (!selectedFile) {
      return;
    }

    // show image after select
    let objectUrl = URL.createObjectURL(selectedFile);
    setImgUrl(objectUrl);
    console.log(selectedFile);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, dispatch]);

  useEffect(() => {
    setName(dataGetProfile.name);
    setPhoneNumber(dataGetProfile.phone_number);
    setAddress(dataGetProfile.address);
    setCityId(dataGetProfile.city_id);
    setImgUrl(dataGetProfile.img_url);
  }, [dataGetProfile]);

  const submit = (e) => {
    e.preventDefault();
    const form = {
      name: name,
      phone_number: phone_number,
      address: address,
      city_id: city_id,
    };

    dispatch(UpdateProfile({ form, selectedFile, token, navigate }));
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

      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <h1 className="mb-5 text-xl" key={dataGetProfile.id}>
            Lengkapi Info Akun
          </h1>
          <label htmlFor="profilePhoto" className="cursor-pointer">
            <div className="overflow-hidden w-28 h-28 rounded-xl hover:scale-110 transition-all duration-300">
              <img
                className={`object-cover h-full w-full`}
                src={imgUrl || "/images/default_profile_photo.png"}
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
              />
            </div>

            <div className="mb-5">
              <label>Kota</label>
              <br />
              {/* {console.log(cityId)} */}
              <select
                onChange={(e) => setCityId(e.target.value)}
                className={inputStyle}
                placeholder="Kota Anda"
                value={city_id}
              >
                {country.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.nama_kota}
                  </option>
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
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
        </>
      )}
    </div>
  );
}
