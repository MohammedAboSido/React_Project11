import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productData } from "./Data";
import {
  Input,
  Label,
  Option,
  ProductAddButton,
  ProductBottom,
  ProductButton,
  ProductForm,
  ProductFormLeft,
  ProductFormRight,
  ProductInfoBottom,
  ProductInfoImg,
  ProductInfoItem,
  ProductInfoKey,
  ProductInfoTop,
  ProductInfoValue,
  ProductName,
  ProductPageWrapper,
  ProductTitle,
  ProductTitleContainer,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
  ProductUpload,
  ProductUploadImg,
  PublishIcon,
  Select,
} from "./style";

export default function ProductPage() {
  return (
    <>
      <ProductPageWrapper>
        <ProductTitleContainer>
          <ProductTitle>Product</ProductTitle>
          <Link to="/newproduct">
            <ProductAddButton>Create</ProductAddButton>
          </Link>
        </ProductTitleContainer>
        <ProductTop>
          <ProductTopLeft>
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </ProductTopLeft>
          <ProductTopRight>
            <ProductInfoTop>
              <ProductInfoImg
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <ProductName>Apple Airpods</ProductName>
            </ProductInfoTop>
            <ProductInfoBottom>
              <ProductInfoItem>
                <ProductInfoKey>id:</ProductInfoKey>
                <ProductInfoValue>123</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoKey>sales:</ProductInfoKey>
                <ProductInfoValue>5123</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoKey>active:</ProductInfoKey>
                <ProductInfoValue>yes</ProductInfoValue>
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoKey>in stock:</ProductInfoKey>
                <ProductInfoValue>no</ProductInfoValue>
              </ProductInfoItem>
            </ProductInfoBottom>
          </ProductTopRight>
        </ProductTop>

        <ProductBottom>
          <ProductForm>
            <ProductFormLeft>
              <Label>Product Name</Label>
              <Input type="text" placeholder="Apple AirPod" />
              <Label>In Stock</Label>
              <Select name="inStock" id="idStock">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
              <Label>Active</Label>
              <Select name="active" id="active">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </ProductFormLeft>
            <ProductFormRight>
              <ProductUpload>
                <ProductUploadImg
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <Label for="file">
                  <PublishIcon />
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
              </ProductUpload>
              <ProductButton>Update</ProductButton>
            </ProductFormRight>
          </ProductForm>
        </ProductBottom>
      </ProductPageWrapper>
    </>
  );
}
