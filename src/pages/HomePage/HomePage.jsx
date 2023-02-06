import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import { userData } from "./Data";
import { HomeWidgets, HomeWrapper } from "./style";

export default function HomePage() {
  return (
    <>
      <HomeWrapper>
        <FeaturedInfo />
        <Chart
          data={userData}
          grid
          title={"User Analytics"}
          dataKey={"Active User"}
        />
        <HomeWidgets>
          <WidgetSm />
          <WidgetLg />
        </HomeWidgets>
      </HomeWrapper>
    </>
  );
}
