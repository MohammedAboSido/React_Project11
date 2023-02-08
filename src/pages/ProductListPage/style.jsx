import styled from "@emotion/styled";
import { DeleteOutline } from "@material-ui/icons";

export const ProductListPageWrapper = styled("div")`
  label: UserListPageWrapper;
  flex: 4;
`;
export const ProductListProduct = styled("div")`
  label: ProductListProduct;
  display: flex;
  align-items: center;
`;
export const ProductListImg = styled("img")`
  label: ProductListImg;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const ProductListEdit = styled("button")`
  label: ProductListEdit;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
export const DeleteOutlineIcon = styled(DeleteOutline)`
  label: DeleteOutlineIcon;
  color: red;
  cursor: pointer;
`;
