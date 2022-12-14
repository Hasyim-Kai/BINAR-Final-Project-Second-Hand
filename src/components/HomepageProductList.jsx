import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyProductNotification from "../components/EmptyProductNotification";
import Loading from "../components/Loading";
import ProductItem from "../components/ProductItem";
import SearchButton from "../components/SearchButton";
import SecondarySearchButton from "../components/SecondarySearchButton";
import { getAllProduct } from "../redux/action/productAction";

export default function HomepageProductList() {
  const token = localStorage.getItem("user:token");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productReducer.productList);
  const isLoading = useSelector((state) => state.globalReducer.isLoading);
  const filterBtn = [
    "Semua",
    "Hobi",
    "Kendaraan",
    "Baju",
    "Elektronik",
    "Kesehatan",
  ];

  const [category, setCategory] = useState("Semua");
  const [filteredDataDummy, setFilteredDataDummy] = useState([]);

  function onCategoryChange(categoryName) {
    setCategory(categoryName);
  }

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    const filterBtn = [
      "Semua",
      "Hobi",
      "Kendaraan",
      "Baju",
      "Elektronik",
      "Kesehatan",
    ];
    category === "Semua"
      ? setFilteredDataDummy(productList)
      : setFilteredDataDummy(
          productList.filter((item) => filterBtn[item.kategori_id] === category)
        );
  }, [category, productList]);

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <section className="container mx-auto px-2 my-10">
            {/* CATEGORY BUTTON LIST */}
            <h1>
              <b>Telusuri Kategori</b>
            </h1>
            <div className="flex gap-5 mt-3 flex-wrap">
              {filterBtn.map((item) =>
                category === item ? (
                  <SearchButton
                    text={item}
                    anyFunction={onCategoryChange}
                    key={item}
                  />
                ) : (
                  <SecondarySearchButton
                    text={item}
                    anyFunction={onCategoryChange}
                    key={item}
                  />
                )
              )}
            </div>
          </section>

          {/* ITEM LIST */}
          <section className="container mx-auto px-2 mb-28 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-3">
            {filteredDataDummy.length < 1 ? (
              <EmptyProductNotification isOnGrid={true} />
            ) : (
              filteredDataDummy.map((item) => (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  name={item.nama}
                  category={filterBtn[item.kategori_id]}
                  price={item.harga}
                  img={item.img_url}
                  token={token}
                />
              ))
            )}
          </section>
        </>
      )}
    </>
  );
}
