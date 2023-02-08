import React from "react";
import { Link } from "react-router-dom";
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
              <Link to={"/"} className="link">
                <SidebarListItem>
                  <LineStyleIcon />
                  Home
                </SidebarListItem>
              </Link>
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
              <Link to={"/users"} className="link">
                <SidebarListItem>
                  <PermIdentityIcon />
                  Users
                </SidebarListItem>
              </Link>
              <Link to={"/products"} className="link">
                <SidebarListItem>
                  <StorefrontIcon />
                  Products
                </SidebarListItem>
              </Link>
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
