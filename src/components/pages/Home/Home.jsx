import React from "react";
import Banner from "./Banner";
import FeaturesSection from "./FeaturesSection";
import QuickOrder from "./QuickOrder";
import HotDeals from "./HotDeals";
import HighlightsStats from "./HighlightsStats";
import BenefitsSection from "./BenefitsSection";

const Home = () => {
  return (
    <>
      <div>
        <Banner className="pt-20" />
        <FeaturesSection />
        <BenefitsSection/>
        <QuickOrder />
        <HotDeals />
        <HighlightsStats />
      </div>
    </>
  );
};

export default Home;
