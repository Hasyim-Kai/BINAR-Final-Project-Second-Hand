import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {HandleUploadImages} from "../utility/HandleUploadImages";

export default function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("/images/default_profile_photo.png");
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    let objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // HandleUploadImages
  // function handleUploadImages(event) {
  //   if (event.target.files[0].size > 1000000) {
  //     event.preventDefault();
  //     alert(`Cannot upload files more than 1 MB`);
  //     return;
  //   } else {
  //     setSelectedFile(event.target.files[0]);
  //   }
  // }

  return (
    <div className="min-h-screen max-w-4xl mx-auto relative flex flex-col items-center gap-4 pt-10">
      <h1 className="mb-5 text-xl">Lengkapi Info Akun</h1>
      <label htmlFor="profilePhoto" className="cursor-pointer">
        <div className="overflow-hidden w-28 h-28 rounded-xl hover:scale-110 transition-all duration-300">
          <img
            className={`object-cover h-full w-full`}
            src={preview}
            alt="cat"
          />
        </div>
        <input
          onChange={(e)=> HandleUploadImages(e, setSelectedFile)}
          className="hidden"
          type="file"
          name="profilePhoto"
          accept="image/*"
          id="profilePhoto"
        />
      </label>

      <form className="w-3/5 mt-10 mb-24">
        <div className="mb-5">
          <label>Nama</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            required
          />
        </div>

        <div className="mb-5">
          <label>Kota</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="kota"
            placeholder="Kota Anda"
            required
          />
        </div>

        <div className="mb-5">
          <label>Alamat</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="alamat"
            placeholder="Alamat Anda"
            required
          />
        </div>

        <div className="mb-8">
          <label>No Handphone</label>
          <br />
          <input
            className={inputStyle}
            type="number"
            name="nohp"
            placeholder="Contoh: 08968888123"
            pattern="{6,}"
            required
          />
        </div>

        <button
          className={`h-10 py-2 px-3 text-white bg-primaryPurple rounded-xl w-full`}
        >
          Simpan
        </button>
      </form>

      <Link className="absolute left-28" to="/">
        <img src="/icons/fi_arrow-left.svg" alt="arrow left" />
      </Link>
    </div>
  );
}
