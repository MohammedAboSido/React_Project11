import styled from "@emotion/styled";
import { Publish } from "@material-ui/icons";

export const ProductPageWrapper = styled("div")`
  label: ProductPageWrapper;
  flex: 4;
  padding: 20px;
`;
export const ProductTitleContainer = styled("div")`
  label: ProductTitleContainer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProductTitle = styled("h1")`
  label: ProductTitle;
`;
export const ProductAddButton = styled("button")`
  label: ProductAddButton;
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export const ProductTop = styled("div")`
  label: ProductTop;
  display: flex;
`;
export const ProductTopLeft = styled("div")`
  label: ProductTopLeft;
  flex: 1;
`;
export const ProductTopRight = styled("div")`
  label: ProductTopRight;
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductInfoTop = styled("div")`
  label: ProductInfoTop;
  display: flex;
  align-items: center;
`;
export const ProductInfoImg = styled("img")`
  label: ProductInfoImg;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductName = styled("span")`
  label: ProductName;
  font-weight: 600;
`;
export const ProductInfoBottom = styled("div")`
  label: ProductInfoBottom;
  margin-top: 10px;
`;
export const ProductInfoItem = styled("div")`
  label: ProductInfoItem;
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const ProductInfoKey = styled("span")`
  label: ProductInfoKey;
`;
export const ProductInfoValue = styled("span")`
  label: ProductInfoValue;
  font-weight: 300;
`;
export const ProductBottom = styled("div")`
  label: ProductBottom;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductForm = styled("form")`
  label: ProductForm;
  display: flex;
  justify-content: space-between;
`;
export const ProductFormLeft = styled("div")`
  label: ProductFormLeft;
  display: flex;
  flex-direction: column;
  & > label {
    margin-bottom: 10px;
    color: gray;
  }
  & > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
`;
export const Label = styled("label")`
  label: Label;
`;
export const Input = styled("input")`
  label: Input;
`;
export const Select = styled("select")`
  label: Select;
  margin-bottom: 10px;
`;
export const Option = styled("option")`
  label: Option;
`;
export const ProductFormRight = styled("div")`
  label: ProductFormRight;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductUpload = styled("div")`
  label: ProductUpload;
  display: flex;
  align-items: center;
`;
export const ProductUploadImg = styled("img")`
  label: ProductUploadImg;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const PublishIcon = styled(Publish)`
  label: PublishIcon;
`;
export const ProductButton = styled("button")`
  label: ProductButton;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
