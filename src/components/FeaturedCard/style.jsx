import styled from "@emotion/styled";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeaturedItem = styled("div")`
  label: FeaturedItem;
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const FeaturedTitle = styled("span")`
  label: FeaturedTitle;
  font-size: 20px;
`;
export const FeaturedMoneyContainer = styled("div")`
  label: FeaturedMoneyContainer;
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
export const ArrowUpwardIcon = styled(ArrowUpward)`
  label: ArrowUpwardIcon;
  font-size: 14px;
  margin-left: 5px;
  color: green;
`;
export const ArrowDownwardIcon = styled(ArrowDownward)`
  label: ArrowDownwardIcon;
  font-size: 14px;
  margin-left: 5px;
  color: red;
`;
export const FeaturedMoney = styled("span")`
  label: FeaturedMoney;
  font-size: 30px;
  font-weight: 600;
`;
export const FeaturedMoneyRate = styled("span")`
  label: FeaturedMoneyRate;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const FeaturedSub = styled("span")`
  label: FeaturedSub;
  font-size: 15px;
  color: gray;
`;
