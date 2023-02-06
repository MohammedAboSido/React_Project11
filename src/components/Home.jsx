import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import Container from "./Container/Container";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <HomePage />
      </Container>
    </>
  );
}
