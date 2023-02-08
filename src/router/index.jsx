import HomePage from "../pages/HomePage";
import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage/UserPage";

export const PATHS = {
  HOME: "/",
  USERLIST: "/users",
  USER: "/user/:userId",
};

export const router = [
  { index: true, element: <HomePage /> },
  { path: PATHS.USERLIST, element: <UserListPage /> },
  { path: PATHS.USER, element: <UserPage /> },
];
