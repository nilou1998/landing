import Brands from "@/component/brands/Brands";
import Foundation from "@/component/foundation/Foundation";
import Hero from "@/component/hero/Hero";
import Power from "@/component/Power/Power";
import Sleek from "@/component/Sleek/Sleek";
import Integrate from "@/component/Inegrate/Integrate";
import Community from "@/component/Community/Community";
import CommunityPlatform from "@/component/CommunityPlatform/CommunityPlatform";
import Card1 from "@/component/Cards/Card1";
import Card2 from "@/component/Cards/Card2";
import BookingDemo from "@/component/BookingDemo/BookingDemo";
import Footer from "@/component/Footer/Footer";
import FooterMedia from "@/component/Footer/FooterMedia";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Foundation />

      <Power />
      <Sleek />
      <Integrate />
      <Community />
      <CommunityPlatform />
      <Card1 />
      <Card2 />
      <BookingDemo />
      <Footer />
      <FooterMedia />
    </div>
  );
};

export default page;
