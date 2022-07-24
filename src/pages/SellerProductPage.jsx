import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import IdentityCard from "../components/IdentityCard";
import ProductCategoryPanel from "../components/ProductCategoryPanel";
import ProductItem from "../components/ProductItem";
import SuccessAlert from "../components/SuccessAlert";
import { getSellerProduct } from "../redux/action/productAction";

export default function SellerProductPage() {
  const [token] = useState("");
  const dispatch = useDispatch();
  const { sellerProductList } = useSelector((state) => state.productReducer);
  const { dataGetProfile } = useSelector((state) => state.authReducer);
  const [alertSuccess, setAlertSuccess] = useState(false);
  let [searchParams] = useSearchParams();
  let isAddSuccess = searchParams.get("isAddPublishProductSuccess");
  let isAddProduct = searchParams.get("isAddProductSuccess");

  const productCategory = [
    "Semua",
    "Hobi",
    "Kendaraan",
    "Baju",
    "Elektronik",
    "Kesehatan",
  ];
  useEffect(() => {
    dispatch(getSellerProduct());
    if (isAddSuccess || isAddProduct) {
      setAlertSuccess(true);
    }
  }, [dispatch, isAddProduct, isAddSuccess]);

  return (
    <div className="min-h-screen max-w-5xl mx-auto pt-10">
      {alertSuccess && (
        <SuccessAlert
          isShow={alertSuccess}
          setIsShow={setAlertSuccess}
          message={
            isAddProduct
              ? "Product berhasil ditambahkan."
              : "Produk berhasil diterbitkan."
          }
        />
      )}

      <h1 className="text-2xl mb-7">
        <b>Daftar Jual Saya</b>
      </h1>
      <IdentityCard
        name={dataGetProfile?.name}
        city={dataGetProfile?.kota}
        img={dataGetProfile.img_url}
        isEditEnabled={true}
      />

      <div className="flex flex-wrap justify-between">
        <ProductCategoryPanel />
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl lg:mx-0 mx-auto">
          {sellerProductList.length >= 4 ? (
            <></>
          ) : (
            <Link to="/new-product">
              <div className="border-dashed border-2 text-center overflow-hidden w-full md:w-52 h-56 rounded-xl">
                <img
                  className={`mx-auto mt-20`}
                  src="/icons/grey_fi_plus.svg"
                  alt="plus"
                />
                Tambah Produk
              </div>
            </Link>
          )}

          {sellerProductList.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.nama}
              category={productCategory[item.kategori_id]}
              price={item.harga}
              img={item.img_url}
              isMine={true}
              token={token}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
