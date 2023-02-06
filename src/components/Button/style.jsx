import styled from "@emotion/styled";
import { Visibility } from "@material-ui/icons";

export const WidgetSmButton = styled("button")`
  label: WidgetSmButton;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
export const VisibilityIcon = styled(Visibility)`
  label: VisibilityIcon;
  font-size: 16px !important;
  margin-right: 5px;
`;
