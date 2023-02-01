import { css, Global } from "@emotion/react";

export default function MainStyle() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");
          * {
            font-family: "Source Sans Pro", sans-serif;
            margin: 0;
          }
          .link {
            text-decoration: none;
            color: inherit;
          }
        `}
      />
    </>
  );
}
