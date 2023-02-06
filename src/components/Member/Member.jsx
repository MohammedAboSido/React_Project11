import React from "react";
import Button from "../Button/Button";
import {
  WidgetSmImg,
  WidgetSmListItem,
  WidgetSmUser,
  WidgetSmUsername,
  WidgetSmUserTitle,
} from "./style";

export default function Member({ img, name, job }) {
  return (
    <>
      <WidgetSmListItem>
        <WidgetSmImg src={img} alt="" />
        <WidgetSmUser>
          <WidgetSmUsername>{name}</WidgetSmUsername>
          <WidgetSmUserTitle>{job}</WidgetSmUserTitle>
        </WidgetSmUser>
        <Button />
      </WidgetSmListItem>
    </>
  );
}
