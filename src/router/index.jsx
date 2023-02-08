import HomePage from "../pages/HomePage";
import UserListPage from "../pages/UserListPage";

export const PATHS = {
  HOME: "/",
  USERLIST: "/users",
};

export const router = [
  { index: true, element: <HomePage /> },
  { path: PATHS.USERLIST, element: <UserListPage /> },
];
