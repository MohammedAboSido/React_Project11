import React from "react";
import {
  AddProductButton,
  AddProductForm,
  AddProductItem,
  AddProductTitle,
  Input,
  Label,
  NewProductPageWrapper,
  Option,
  Select,
} from "./style";

export default function NewProductPage() {
  return (
    <>
      <NewProductPageWrapper>
        <AddProductTitle>New Product</AddProductTitle>
        <AddProductForm>
          <AddProductItem>
            <Label>Image</Label>
            <Input type="file" id="file" />
          </AddProductItem>

          <AddProductItem>
            <Label>Name</Label>
            <Input type="text" placeholder="Apple Airpods" />
          </AddProductItem>

          <AddProductItem>
            <Label>Stock</Label>
            <Input type="text" placeholder="123" />
          </AddProductItem>

          <AddProductItem>
            <Label>Active</Label>
            <Select name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </AddProductItem>
          <AddProductButton>Create</AddProductButton>
        </AddProductForm>
      </NewProductPageWrapper>
    </>
  );
}
