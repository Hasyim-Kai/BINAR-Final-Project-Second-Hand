import HomePageBanner from "../components/HomePageBanner";
import HomepageProductList from "../components/HomepageProductList";
import SellButton from "../components/SellButton";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* BANNER */}
      <HomePageBanner />

      {/* CATEGORY */}
      <HomepageProductList />

      {/* SELL BUTTON */}
      <SellButton />
    </div>
  );
}
