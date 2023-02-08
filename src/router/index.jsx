import HomePage from "../pages/HomePage";
import NewUserPage from "../pages/NewUserPage/NewUserPage";
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import UserListPage from "../pages/UserListPage";
import UserPage from "../pages/UserPage/UserPage";

export const PATHS = {
  HOME: "/",
  USERLIST: "/users",
  USER: "/user/:userId",
  NEWUSER: "/newUser",
  PRODUCTS: "/products",
  PRODUCT: "/product/:productId",
  NEWPRODUCT: "/newProduct",
};

export const router = [
  { index: true, element: <HomePage /> },
  { path: PATHS.USERLIST, element: <UserListPage /> },
  { path: PATHS.USER, element: <UserPage /> },
  { path: PATHS.NEWUSER, element: <NewUserPage /> },
  { path: PATHS.PRODUCTS, element: <ProductListPage /> },
  // { path: PATHS.PRODUCT, element: <ProductPage /> },
  // { path: PATHS.NEWPRODUCT, element: <NewProductPage /> },
];
