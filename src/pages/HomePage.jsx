import SellButton from "../components/SellButton";
import HomePageBanner from "../components/HomePageBanner";
import { useState } from "react";
import HomepageProductList from "../components/HomepageProductList";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* tutorial issuee */}
      {/* BANNER */}
      <HomePageBanner />

      {/* CATEGORY */}
      <HomepageProductList />

      {/* SELL BUTTON */}
      <SellButton />
    </div>
  );
}
