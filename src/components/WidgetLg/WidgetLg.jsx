import React from "react";
import WidgetLgButton from "../WidgetLgButton/WidgetLgButton";
import {
  WidgetLgAmount,
  WidgetLgDate,
  WidgetLgImg,
  WidgetLgName,
  WidgetLgStatus,
  WidgetLgTable,
  WidgetLgTh,
  WidgetLgTitle,
  WidgetLgTr,
  WidgetLgUser,
  WidgetLgWrapper,
} from "./style";

export default function WidgetLg() {
  return (
    <>
      <WidgetLgWrapper>
        <WidgetLgTitle>Latest transactions</WidgetLgTitle>
        <WidgetLgTable>
          <WidgetLgTr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </WidgetLgTr>
          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <WidgetLgButton type="Approved" />
            </WidgetLgStatus>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <WidgetLgButton type="Approved" />
            </WidgetLgStatus>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <WidgetLgButton type="Declined" />
            </WidgetLgStatus>
          </WidgetLgTr>

          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 Jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <WidgetLgButton type="Pending" />
            </WidgetLgStatus>
          </WidgetLgTr>
        </WidgetLgTable>
      </WidgetLgWrapper>
    </>
  );
}
