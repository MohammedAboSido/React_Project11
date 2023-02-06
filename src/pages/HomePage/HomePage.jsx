import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { HomeWrapper } from "./style";

export default function HomePage() {
  return (
    <>
      <HomeWrapper>
        <FeaturedInfo />
      </HomeWrapper>
    </>
  );
}
