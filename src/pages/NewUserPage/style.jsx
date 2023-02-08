import styled from "@emotion/styled";

export const NewUserPageWrapper = styled("div")`
  label: NewUserPageWrapper;
  flex: 4;
`;
export const NewUserTitle = styled("h1")`
  label: NewUserTitle;
`;
export const NewUserForm = styled("form")`
  label: NewUserForm;
  display: flex;
  flex-wrap: wrap;
`;
export const NewUserItem = styled("div")`
  label: NewUserItem;
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
export const Label = styled("label")`
  label: Label;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;
export const Input = styled("input")`
  label: Input;
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const NewUserGender = styled("div")`
  label: NewUserGender;
  & > input {
    margin-top: 15px;
  }
  & > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;
export const NewUserSelect = styled("select")`
  label: NewUserSelect;
  height: 40px;
  border-radius: 5px;
`;
export const Option = styled("option")`
  label: Option;
`;
export const NewUserButton = styled("button")`
  label: NewUserButton;
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
