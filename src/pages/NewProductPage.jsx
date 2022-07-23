import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AddNewProduct } from "../redux/action/productAction";
import FailAlert from "../components/FailAlert";

export default function NewProductPage() {
  const form = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState([]);
  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;
  const [alert, setAlert] = useState(false);
  const [messageAlert, setAlertMessage] = useState("");

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
    // return () => {
    //   preview.forEach((imagePreview) => URL.revokeObjectURL(imagePreview));
    // };
  }, [selectedFile]);

  function handleUploadImages(event) {
    if (event.target.files.length > 4) {
      event.preventDefault();
      alert(`Cannot upload files more than 4`);
      return;
    } else {
      let imageList = Array.from(event.target.files);
      imageList.forEach((image) => {
        if (image.size > 637822) {
          alert(`Max Image Size is 500 kb`);
          return;
        }
      });
      setSelectedFile(imageList);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    const dataProduct = new FormData(form.current);
    selectedFile.forEach((img) => {
      dataProduct.append("product_pict", img, img.name);
    });
    // for (var pair of dataProduct.entries()) {
    //   console.table(pair[0]+ ', ' + pair[1]);
    // }
    dispatch(
      AddNewProduct(dataProduct, navigate, (e) => {
        setAlert(true);
        setAlertMessage(e);
      })
    );
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto relative flex flex-col items-center gap-4 pt-10">
      {/* show alert */}
      {alert && (
        <FailAlert isShow={true} setIsShow={setAlert} message={messageAlert} />
      )}
      <Link className="absolute left-28" to="/">
        <img src="/icons/fi_arrow-left.svg" alt="arrow left" />
      </Link>
      <form
        ref={form}
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
            name="nama"
            placeholder="Nama Produk"
            required
          />
        </div>

        <div className="mb-5">
          <label>Harga Produk</label>
          <br />
          <input
            className={inputStyle}
            type="number"
            name="harga"
            placeholder="Rp. 0,0"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="category">Kategori</label>
          <br />

          <select
            className={inputStyle}
            name="kategori_id"
            id="kategori_id"
            required
          >
            <option value="1">Hobi</option>
            <option value="2">Kendaraan</option>
            <option value="3">Baju</option>
            <option value="4">Elektronik</option>
            <option value="5">Kesehatan</option>
          </select>
        </div>

        <div className="mb-4">
          <label>Deskripsi</label>
          <br />
          <textarea
            className={inputStyle}
            name="deskripsi"
            cols="10"
            rows="4"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            required
          ></textarea>
        </div>

        <label>Foto Produk</label>
        <div className="mb-7 flex flex-wrap gap-4">
          <div className="w-28">
            <label htmlFor="product_pict" className="cursor-pointer">
              <div className="border-dashed border-2 overflow-hidden w-28 h-28 rounded-xl">
                <img
                  className={`mx-auto mt-10`}
                  src="/icons/grey_fi_plus.svg"
                  alt="plus"
                />
              </div>
              <input
                className="hidden"
                onChange={(e) => handleUploadImages(e)}
                type="file"
                accept=".png,.jpg,.jpeg"
                id="product_pict"
                multiple
              />
            </label>
          </div>

          {/* IMAGE PREVIEW */}
          {selectedFile &&
            preview.map((imagePreview, index) => (
              <div key={index} className="overflow-hidden w-28 h-28 rounded-xl">
                <img
                  className={`object-cover h-full w-full`}
                  src={imagePreview}
                  alt="imagePreview"
                />
              </div>
            ))}
        </div>
        <button
          className={`h-10 mt-2 py-2 px-3 rounded-xl w-1/2 border border-primaryPurple `}
        >
          Preview
        </button>
        <button
          className={`h-10 py-2 px-1 text-white bg-primaryPurple rounded-xl w-1/2`}
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
