import styled from "@emotion/styled";

export const WidgetSmListItem = styled("li")`
  label: WidgetSmListItem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  gap: 20px;
`;
export const WidgetSmImg = styled("img")`
  label: WidgetSmImg;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const WidgetSmUser = styled("div")`
  label: WidgetSmUser;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const WidgetSmUsername = styled("span")`
  label: WidgetSmUsername;
  font-weight: 600;
`;
export const WidgetSmUserTitle = styled("span")`
  label: WidgetSmUserTitle;
  font-weight: 300;
`;
