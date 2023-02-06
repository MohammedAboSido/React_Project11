import React from "react";
import { VisibilityIcon, WidgetSmButton } from "./style";

export default function Button({ icon, name }) {
  return (
    <>
      <WidgetSmButton>
        {icon ? icon : <VisibilityIcon />}
        {name ? name : "Display"}
      </WidgetSmButton>
    </>
  );
}
