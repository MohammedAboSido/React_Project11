import React from "react";
import { useRoutes } from "react-router-dom";
import { router } from "../router";
import Container from "./Container/Container";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function Home() {
  const routes = useRoutes(router);
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        {routes}
      </Container>
    </>
  );
}
