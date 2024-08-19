import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { deleteProduct } from "../redux/productSlice";
import ViewProductModal from "./ViewProductModal";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteProduct(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 350 },
    { field: "title", headerName: "PRODUCT DETAILS", width: 350 },
    { field: "description", headerName: "Details", width: 350 },
    { field: "category", headerName: "PRODUCT CATEGORY", width: 350 },

    { field: "regularPrice", headerName: "Regular Price", width: 350 },
    { field: "totalStock", headerName: "Total Stock", width: 350 },
    {
      field: "actions",
      headerName: "Actions",
      width: 350,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleViewClick(params.row)}>VIEW</Button>
          <Button
            onClick={() => handleDeleteClick(params.row.id)}
            color="secondary"
          >
            DELETE
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
      <Box
        sx={{
          height: 400,
          width: "100%",
          display: "flex",
          "& .MuiDataGrid-root": {
            border: "1px solid #ddd",
            width: "100%",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: 400,
            borderRadius: "var(--none, 0px)",
            borderBottom: "1px solid var(--divider, rgba(0, 0, 0, 0.12))",
            borderLeft:
              "var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))",
            borderRight:
              "var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))",
            borderTop:
              "var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))",
            background: "var(--primary-selected, rgba(33, 150, 243, 0.08))",
            alignItems: "space-between !important",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #ddd",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#e0e0e0",
          },
          "& .MuiDataGrid-viewport": {
            width: "100%",
          },
        }}
      >
        <DataGrid rows={products} columns={columns} pageSize={5} />
      </Box>
      <ViewProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductList;
