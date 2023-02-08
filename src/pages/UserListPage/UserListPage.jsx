import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRows } from "./Data";
import {
  DeleteOutlineIcon,
  UserListEdit,
  UserListImg,
  UserListPageWrapper,
  UserListUser,
} from "./style";

export default function UserListPage() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.avatar} alt="" />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <UserListEdit>Edit</UserListEdit>
            </Link>
            <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <UserListPageWrapper>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
      />
    </UserListPageWrapper>
  );
}
