import React from "react";
import Members from "../Members/Members";
import { WidgetSmList, WidgetSmTitle, WidgetSmWrapper } from "./style";

export default function WidgetSm() {
  return (
    <>
      <WidgetSmWrapper>
        <WidgetSmTitle>New Join Members</WidgetSmTitle>
        <WidgetSmList>
          <Members />
        </WidgetSmList>
      </WidgetSmWrapper>
    </>
  );
}
