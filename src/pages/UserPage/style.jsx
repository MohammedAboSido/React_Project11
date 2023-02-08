import styled from "@emotion/styled";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  PublishRounded,
} from "@material-ui/icons";

export const UserPageWrapper = styled("div")`
  label: UserPageWrapper;
  flex: 4;
  padding: 20px;
`;
export const UserTitleContainer = styled("div")`
  label: UserTitleContainer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserTitle = styled("h1")`
  label: UserTitle;
`;
export const UserAddButton = styled("button")`
  label: UserAddButton;
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
export const UserContainer = styled("div")`
  label: UserContainer;
  display: flex;
  margin-top: 20px;
`;
export const UserShow = styled("div")`
  label: UserShow;
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const UserShowTop = styled("div")`
  label: UserShowTop;
  display: flex;
  align-items: center;
`;
export const UserShowImg = styled("img")`
  label: UserShowImg;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserShowTopTitle = styled("div")`
  label: UserShowTopTitle;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const UserShowUsername = styled("span")`
  label: UserShowUsername;
  font-weight: 600;
`;
export const UserShowUserTitle = styled("span")`
  label: UserShowUserTitle;
  font-weight: 300;
`;
export const UserShowBottom = styled("div")`
  label: UserShowBottom;
  margin-top: 20px;
`;
export const UserShowTitle = styled("span")`
  label: UserShowTitle;
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
export const UserShowInfo = styled("div")`
  label: UserShowInfo;
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;
export const PermIdentityIcon = styled(PermIdentity)`
  label: PermIdentityIcon;
  font-size: 16px !important;
`;
export const UserShowInfoTitle = styled("span")`
  label: UserShowInfoTitle;
  margin-left: 10px;
`;

export const CalendarTodayIcon = styled(CalendarToday)`
  label: CalendarTodayIcon;
  font-size: 16px !important;
`;
export const PhoneAndroidIcon = styled(PhoneAndroid)`
  label: PhoneAndroidIcon;
  font-size: 16px !important;
`;
export const MailOutlineIcon = styled(MailOutline)`
  label: MailOutlineIcon;
  font-size: 16px !important;
`;
export const LocationSearchingIcon = styled(LocationSearching)`
  label: LocationSearchingIcon;
  font-size: 16px !important;
`;
export const UserUpdate = styled("div")`
  label: UserUpdate;
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
export const UserUpdateTitle = styled("span")`
  label: UserUpdateTitle;
  font-size: 24px;
  font-weight: 600;
`;
export const UserUpdateForm = styled("form")`
  label: UserUpdateForm;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const UserUpdateLeft = styled("div")`
  label: UserUpdateLeft;
`;
export const UserUpdateItem = styled("div")`
  label: UserUpdateItem;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Label = styled("label")`
  label: Label;
  margin-bottom: 5px;
  font-size: 14px;
`;
export const UserUpdateInput = styled("input")`
  label: UserUpdateInput;
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;
export const UserUpdateRight = styled("div")`
  label: UserUpdateRight;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserUpdateUpload = styled("div")`
  label: UserUpdateUpload;
  display: flex;
  align-items: center;
`;
export const UserUpdateImg = styled("img")`
  label: UserUpdateImg;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const PublishIcon = styled(PublishRounded)`
  label: PublishIcon;
  cursor: pointer;
`;
export const LabelIcon = styled("label")`
  label: LabelIcon;
`;
export const Input = styled("input")`
  label: Input;
`;
export const UserUpdateButton = styled("button")`
  label: UserUpdateButton;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
