import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ViewProductModal = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh", 
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            p: 4,
            backgroundColor: "background.paper",
            margin: "auto",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            width: { xs: "90%", sm: "70%", md: "50%" },
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: 2,
            boxShadow: 24,

            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "text.secondary",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          >
            {product.title}
          </Typography>
          <TableContainer component={Paper} sx={{ mb: 2, width: "100%" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell>{product.category}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Regular Price
                  </TableCell>
                  <TableCell>{product.regularPrice}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Total Stock</TableCell>
                  <TableCell>{product.totalStock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
              mt: 2,
            }}
          >
            {product.photos?.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index}`}
                width="120"
                style={{
                  borderRadius: 4,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ViewProductModal;
