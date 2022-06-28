import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useForm from "../utility/UseForm";
import FailAlert from "../components/FailAlert";
import { useDispatch } from "react-redux";
import { PostProduct } from "../redux/action/productAction";

export default function NewProductPage() {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState([]);
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;

  const [form, setForm] = useForm({
    nama_product: "",
    harga_product: "",
    kategori: "",
    deskripsi: "",
    fotoproduct: "",
  });

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    let temporaryPreview = [];
    selectedFile.forEach((image) => {
      temporaryPreview.push(URL.createObjectURL(image));
    });
    setPreview(temporaryPreview);

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl)
    return () => {
      preview.forEach((imagePreview) => URL.revokeObjectURL(imagePreview));
    };
  }, [selectedFile]);

  function handleUploadImages(event) {
    if (event.target.files.length > 4) {
      event.preventDefault();
      alert(`Cannot upload files more than 4`);

      return;
    } else {
      setSelectedFile(Array.from(event.target.files));
    }
  }

  const submit = (e) => {
    e.preventDefault();
    dispatch(PostProduct(form));
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
      <Link className="absolute left-28" to="/">
        <img src="/icons/fi_arrow-left.svg" alt="arrow left" />
      </Link>
      <form
        onSubmit={submit}
        className="w-3/5 mb-24"
        encType="multipart/form-data"
      >
        <div className="mb-5">
          <label>Nama Produk</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            onChange={(e) => setForm("nama_product", e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label>Harga Produk</label>
          <br />
          <input
            className={inputStyle}
            type="number"
            name="hargaProduk"
            placeholder="Rp. 0,0"
            onChange={(e) => setForm("harga_product", e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="category">Kategori</label>
          <br />

          <select
            className={inputStyle}
            name="category"
            id="category"
            onChange={(e) => setForm("kategori", e.target.value)}
          >
            <option value="semua">Semua</option>
            <option value="hobi">Hobi</option>
            <option value="kendaraan">Kendaraan</option>
            <option value="baju">Baju</option>
            <option value="elektronik">Elektronik</option>
            <option value="kesehatan">Kesehatan</option>
          </select>
        </div>

        <div className="mb-4">
          <label>Deskripsi</label>
          <br />
          <textarea
            className={inputStyle}
            name="Deskripsi"
            cols="10"
            rows="4"
            onChange={(e) => setForm("deskripsi", e.target.value)}
            placeholder="Contoh: Jalan Ikan Hiu 33"
          ></textarea>
        </div>

        <label>Foto Produk</label>
        <div className="mb-7 flex flex-wrap gap-4">
          <div className="w-28">
            <label htmlFor="productPhoto" className="cursor-pointer">
              <div className="border-dashed border-2 overflow-hidden w-28 h-28 rounded-xl">
                <img
                  className={`mx-auto mt-10`}
                  src="/icons/grey_fi_plus.svg"
                  alt="plus"
                />
              </div>
              <input
                className="hidden"
                onChange={(e) =>
                  handleUploadImages(e, setSelectedFile, () => setAlert(true))
                }
                type="file"
                name="productPhoto"
                accept="image/*"
                id="productPhoto"
                multiple
              />
            </label>
          </div>

          {/* IMAGE PREVIEW */}
          {selectedFile &&
            preview.map((imagePreview) => (
              <div className="overflow-hidden w-28 h-28 rounded-xl">
                <img
                  className={`object-cover h-full w-full`}
                  src={imagePreview}
                  alt="plus"
                />
              </div>
            ))}
        </div>

        <button
          className={`h-10 py-2 px-3 text-white bg-primaryPurple rounded-xl w-full`}
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
