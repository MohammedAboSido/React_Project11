import React from "react";
import {
  LanguageIcon,
  Logo,
  NotificationsnoneIcon,
  SettingsIcon,
  TopbarAvatar,
  TopbarContainer,
  TopbarIconContainer,
  TopbarWrapper,
  TopIconBag,
  Topleft,
  TopRight,
} from "./style";

export default function Topbar() {
  return (
    <>
      <TopbarContainer>
        <TopbarWrapper>
          <Topleft>
            <Logo>Admin</Logo>
          </Topleft>
          <TopRight>
            <TopbarIconContainer>
              <NotificationsnoneIcon />
              <TopIconBag>2</TopIconBag>
            </TopbarIconContainer>
            <TopbarIconContainer>
              <LanguageIcon />
              <TopIconBag>1</TopIconBag>
            </TopbarIconContainer>
            <TopbarIconContainer>
              <SettingsIcon />
            </TopbarIconContainer>
            <TopbarAvatar
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </TopRight>
        </TopbarWrapper>
      </TopbarContainer>
    </>
  );
}
