import React from "react";
import Contianer from "./Container/Contianer";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Contianer>
        <Sidebar />
        <div style={{ flex: "4", backgroundColor: "#ddd" }}>others Page</div>
      </Contianer>
    </>
  );
}
