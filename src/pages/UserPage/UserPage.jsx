import { Input } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Label } from "recharts";
import {
  CalendarTodayIcon,
  LabelIcon,
  LocationSearchingIcon,
  MailOutlineIcon,
  PermIdentityIcon,
  PhoneAndroidIcon,
  PublishIcon,
  UserAddButton,
  UserContainer,
  UserPageWrapper,
  UserShow,
  UserShowBottom,
  UserShowImg,
  UserShowInfo,
  UserShowInfoTitle,
  UserShowTitle,
  UserShowTop,
  UserShowTopTitle,
  UserShowUsername,
  UserShowUserTitle,
  UserTitle,
  UserTitleContainer,
  UserUpdate,
  UserUpdateButton,
  UserUpdateForm,
  UserUpdateImg,
  UserUpdateInput,
  UserUpdateItem,
  UserUpdateLeft,
  UserUpdateRight,
  UserUpdateTitle,
  UserUpdateUpload,
} from "./style";

export default function UserPage() {
  return (
    <>
      <UserPageWrapper>
        <UserTitleContainer>
          <UserTitle>Edit User</UserTitle>
          <Link to="/newUser">
            <UserAddButton>Create</UserAddButton>
          </Link>
        </UserTitleContainer>
        <UserContainer>
          <UserShow>
            <UserShowTop>
              <UserShowImg
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <UserShowTopTitle>
                <UserShowUsername>Anna Becker</UserShowUsername>
                <UserShowUserTitle>Software Engineer</UserShowUserTitle>
              </UserShowTopTitle>
            </UserShowTop>
            <UserShowBottom>
              <UserShowTitle>Account Details</UserShowTitle>
              <UserShowInfo>
                <PermIdentityIcon />
                <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <CalendarTodayIcon />
                <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowTitle>Contact Details</UserShowTitle>

              <UserShowInfo>
                <PhoneAndroidIcon />
                <UserShowInfoTitle>+1 123 456 67</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <MailOutlineIcon />
                <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
              </UserShowInfo>
              <UserShowInfo>
                <LocationSearchingIcon />
                <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
              </UserShowInfo>
            </UserShowBottom>
          </UserShow>
          <UserUpdate>
            <UserUpdateTitle>Edit</UserUpdateTitle>
            <UserUpdateForm>
              <UserUpdateLeft>
                <UserUpdateItem>
                  <Label>Username</Label>
                  <UserUpdateInput type="text" placeholder="annabeck99" />
                </UserUpdateItem>
                <UserUpdateItem>
                  <Label>Full Name</Label>
                  <UserUpdateInput type="text" placeholder="Anna Becker" />
                </UserUpdateItem>
                <UserUpdateItem>
                  <Label>Email</Label>
                  <UserUpdateInput
                    type="text"
                    placeholder="annabeck99@gmail.com"
                  />
                </UserUpdateItem>
                <UserUpdateItem>
                  <Label>Phone</Label>
                  <UserUpdateInput type="text" placeholder="+1 123 456 67" />
                </UserUpdateItem>
                <UserUpdateItem>
                  <Label>Address</Label>
                  <UserUpdateInput type="text" placeholder="New York | USA" />
                </UserUpdateItem>
              </UserUpdateLeft>
              <UserUpdateRight>
                <UserUpdateUpload>
                  <UserUpdateImg
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <LabelIcon htmlFor="file">
                    <PublishIcon />
                  </LabelIcon>
                  <Input type="file" id="file" style={{ display: "none" }} />
                </UserUpdateUpload>
                <UserUpdateButton>Update</UserUpdateButton>
              </UserUpdateRight>
            </UserUpdateForm>
          </UserUpdate>
        </UserContainer>
      </UserPageWrapper>
    </>
  );
}
