import React from "react";
import Banner from "./Banner";
import FeaturesSection from "./FeaturesSection";
import QuickOrder from "./QuickOrder";
import HotDeals from "./HotDeals";
import HighlightsStats from "./HighlightsStats";

const Home = () => {
  return (
    <>
      <div>
        <Banner className="pt-20" />
        <FeaturesSection />
        <QuickOrder />
        <HotDeals />
        <HighlightsStats />
      </div>
    </>
  );
};

export default Home;
