import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import EmptyProductNotification from "../components/EmptyProductNotification";
import SearchButton from "../components/SearchButton";
import SecondarySearchButton from "../components/SecondarySearchButton";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../redux/action/contentAction";
import { countryAction } from "../redux/action/countryAction";

export default function HomepageProductList() {
  const dispatch = useDispatch();

  // const {content} = useSelector(state=>state.contentReducer)
  // console.log('isi content', content)
  useEffect(() => {
    // dispatch(getContent())
    //  dispatch(countryAction());
  }, []);
  // DATA DUMMY NANTI DIGANTI DATA REAL DARI REDUX useSelector
  let dataDummy = [
    { name: "Jam Tangan", category: "Aksesoris", price: 250000 },
    { name: "Jam Tangan", category: "Kesehatan", price: 210000 },
    { name: "Jam Tangan", category: "Aksesoris", price: 230000 },
    { name: "Jam Tangan", category: "Kesehatan", price: 150000 },
    { name: "Jam Tangan", category: "Hobi", price: 270000 },
    { name: "Jam Tangan", category: "Aksesoris", price: 80000 },
    { name: "Jam Tangan", category: "Aksesoris", price: 90000 },
    { name: "Jam Tangan", category: "Kendaraan", price: 1000 },
    { name: "Jam Tangan", category: "Hobi", price: 350000 },
    { name: "Jam Tangan", category: "Aksesoris", price: 320000 },
    { name: "Jam Tangan", category: "Hobi", price: 56600 },
  ];
  const filterBtn = [
    "Semua",
    "Hobi",
    "Kendaraan",
    "Baju",
    "Elektronik",
    "Kesehatan",
  ];
  const [category, setCategory] = useState("Semua");
  const [filteredDataDummy, setFilteredDataDummy] = useState([dataDummy]);
  // const [filteredDataDummy, setFilteredDataDummy] = useState([content]);

  function onCategoryChange(categoryName) {
    setCategory(categoryName);
  }

  useEffect(() => {
    category === "Semua"
      ? setFilteredDataDummy(dataDummy)
      : setFilteredDataDummy(
          dataDummy.filter((item) => item.category === category)
        );
  }, [category]);

  return (
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
          filteredDataDummy.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))
        )}
      </section>
    </>
  );
}
