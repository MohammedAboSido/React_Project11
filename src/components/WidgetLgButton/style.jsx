import styled from "styled-components";

export const Button = styled("button")`
  label: Button;
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  ${(props) => {
    switch (props.type) {
      case "Approved":
        return " background-color: #e5faf2;color: #3bb077;";
      case "Declined":
        return " background-color: #fff0f1;color: #d95087;";
      case "Pending":
        return " background-color: #ebf1fe;color: #2a7ade;";
      default:
        return " background-color: #e5faf2;color: #3bb077;";
    }
  }}
`;
