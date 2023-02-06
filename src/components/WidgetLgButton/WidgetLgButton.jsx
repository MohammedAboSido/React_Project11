import React from "react";
import { Button } from "./style";

export default function WidgetLgButton({ type }) {
  return (
    <>
      <Button type={type}>{type}</Button>
    </>
  );
}
