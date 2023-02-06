import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { FeaturedData } from "./Data";
import { FeaturedWrapper } from "./style";

export default function FeaturedInfo() {
  return (
    <>
      <FeaturedWrapper>
        {FeaturedData.map((item) => (
          <FeaturedCard
            key={item.id}
            money={item.money}
            rate={item.rate}
            sub={item.sub}
            title={item.title}
          />
        ))}
      </FeaturedWrapper>
    </>
  );
}
