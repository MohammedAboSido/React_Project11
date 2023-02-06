import React from "react";
import {
  ArrowDownwardIcon,
  ArrowUpwardIcon,
  FeaturedItem,
  FeaturedMoney,
  FeaturedMoneyContainer,
  FeaturedMoneyRate,
  FeaturedSub,
  FeaturedTitle,
} from "./style";

export default function FeaturedCard({ title, money, rate, sub }) {
  return (
    <>
      <FeaturedItem>
        <FeaturedTitle>{title}</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>{money}</FeaturedMoney>
          <FeaturedMoneyRate>
            {rate}
            {parseInt(rate) > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>{sub}</FeaturedSub>
      </FeaturedItem>
    </>
  );
}
