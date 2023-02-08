import styled from "@emotion/styled";
import { DeleteOutline } from "@material-ui/icons";

export const UserListPageWrapper = styled("div")`
  label: UserListPageWrapper;
  flex: 4;
`;
export const UserListUser = styled("div")`
  label: UserListUser;
  display: flex;
  align-items: center;
`;
export const UserListImg = styled("img")`
  label: UserListImg;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const UserListEdit = styled("button")`
  label: UserListEdit;
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
