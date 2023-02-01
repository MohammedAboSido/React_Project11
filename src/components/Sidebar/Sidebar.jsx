import React from "react";
import {
  AttachMoneyIcon,
  BarChartIcon,
  ChatBubbleOutlineIcon,
  DynamicFeedIcon,
  LineStyleIcon,
  MailOutlineIcon,
  PermIdentityIcon,
  ReportIcon,
  SidebarList,
  SidebarListItem,
  SidebarMenu,
  SidebarTitle,
  SidebarWrapper,
  SiderbarContainer,
  StorefrontIcon,
  TimelineIcon,
  TrendingUpIcon,
  WorkOutlineIcon,
} from "./style";

export default function Sidebar() {
  return (
    <>
      <SiderbarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarTitle>Dashboard</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <LineStyleIcon />
                Home
              </SidebarListItem>
              <SidebarListItem>
                <TimelineIcon />
                Analytics
              </SidebarListItem>
              <SidebarListItem>
                <TrendingUpIcon />
                Sales
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarTitle>Quick Menu</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <PermIdentityIcon />
                Users
              </SidebarListItem>
              <SidebarListItem>
                <StorefrontIcon />
                Products
              </SidebarListItem>
              <SidebarListItem>
                <AttachMoneyIcon />
                Transactions
              </SidebarListItem>
              <SidebarListItem>
                <BarChartIcon />
                Reports
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarTitle>Notifications</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <MailOutlineIcon />
                Mail
              </SidebarListItem>
              <SidebarListItem>
                <DynamicFeedIcon />
                Feedback
              </SidebarListItem>
              <SidebarListItem>
                <ChatBubbleOutlineIcon />
                Messages
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarTitle>Staff</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <WorkOutlineIcon />
                Manage
              </SidebarListItem>
              <SidebarListItem>
                <TimelineIcon />
                Analytics
              </SidebarListItem>
              <SidebarListItem>
                <ReportIcon />
                Reports
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
        </SidebarWrapper>
      </SiderbarContainer>
    </>
  );
}
