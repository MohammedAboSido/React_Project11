import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
const iconsStyle = css`
  margin-right: 5px;
  font-size: 20px !important;
`;
export const SiderbarContainer = styled("div")`
  label: SiderbarContainer;
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
export const SidebarWrapper = styled("div")`
  label: SidebarWrapper;
  padding: 20px;
  color: #555;
`;
export const SidebarMenu = styled("div")`
  label: SidebarMenu;
  margin-bottom: 10px;
`;
export const SidebarTitle = styled("h3")`
  label: SidebarTitle;
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
export const SidebarList = styled("ul")`
  label: SidebarList;
  list-style: none;
  padding: 5px;
`;
export const SidebarListItem = styled("li")`
  label: SidebarListItem;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
  ${(props) => (props.active ? "background-color: rgb(240, 240, 255);" : "")}
`;
export const LineStyleIcon = styled(LineStyle)`
  label: SidebarListItem;
  ${iconsStyle}
`;
export const TimelineIcon = styled(Timeline)`
  label: TimelineIcon;
  ${iconsStyle}
`;
export const TrendingUpIcon = styled(TrendingUp)`
  label: TrendingUpIcon;
  ${iconsStyle}
`;
export const PermIdentityIcon = styled(PermIdentity)`
  label: PermIdentityIcon;
  ${iconsStyle}
`;
export const StorefrontIcon = styled(Storefront)`
  label: StorefrontIcon;
  ${iconsStyle}
`;
export const AttachMoneyIcon = styled(AttachMoney)`
  label: AttachMoneyIcon;
  ${iconsStyle}
`;
export const BarChartIcon = styled(BarChart)`
  label: BarChartIcon;
  ${iconsStyle}
`;
export const MailOutlineIcon = styled(MailOutline)`
  label: MailOutlineIcon;
  ${iconsStyle}
`;
export const LDynamicFeedIcon = styled(DynamicFeed)`
  label: DynamicFeedIcon;
  ${iconsStyle}
`;
export const DynamicFeedIcon = styled(DynamicFeed)`
  label: DynamicFeedIcon;
  ${iconsStyle}
`;
export const ChatBubbleOutlineIcon = styled(ChatBubbleOutline)`
  label: ChatBubbleOutlineIcon;
  ${iconsStyle}
`;
export const WorkOutlineIcon = styled(WorkOutline)`
  label: WorkOutlineIcon;
  ${iconsStyle}
`;
export const ReportIcon = styled(Report)`
  label: ReportIcon;
  ${iconsStyle}
`;
