import React from "react";
import Banner from "./Banner";
import FeaturesSection from "./FeaturesSection";
import BenefitsSection from "./BenefitsSection";
import QuickOrder from "./QuickOrder";
import HotDeals from "./HotDeals";
import HighlightsStats from "./HighlightsStats";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturesSection />
      <BenefitsSection />
      <QuickOrder />
      <HotDeals />
      <HighlightsStats />
    </>
  );
};

export default Home;
