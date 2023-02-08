import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productRows } from "./Data";
import {
  DeleteOutlineIcon,
  ProductListEdit,
  ProductListImg,
  ProductListPageWrapper,
  ProductListProduct,
} from "./style";

export default function ProductListPage() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListProduct>
            <ProductListImg src={params.row.img} alt="" />
            {params.row.name}
          </ProductListProduct>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListEdit>Edit</ProductListEdit>
            </Link>
            <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <ProductListPageWrapper>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
      />
    </ProductListPageWrapper>
  );
}
