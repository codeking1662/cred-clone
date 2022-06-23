import React from "react";
import AppRating from "../components/AppRating/AppRating";
import BrandsLove from "../components/BrandsLove/BrandsLove";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import CredStory from "../components/CredStory/CredStory";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import WindowPeek from "../components/WindowPeek/WindowPeek.js";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase/>
      <FeelSpecial/>
      <BrandsLove/>
      <CredExperience/>
      <MobileScroll/>
      <div className="non-mobile">
        <WindowPeek/>
      </div>
      <CredSecurity/>
      <CredStory/>
      <AppRating/>
      <Footer/>
    </>
  );
};

export default HomePage;


// <AppRating />
// <Footer />
// </>
// );