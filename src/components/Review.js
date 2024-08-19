import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const ProductReview = ({ formData }) => {
  return (
    <Container
      sx={{
        padding: 3,
        border: "1px solid",
        borderColor: "#20c18d",

        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          borderBottom: "2px solid",
          borderColor: "#20c18d",
          paddingBottom: 1,
          marginBottom: 2,
        }}
      >
        Review your Product Details
      </Typography>
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Title:</strong> {formData.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Description:</strong> {formData.description}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Category:</strong> {formData.category}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Regular Price:</strong> {formData.regularPrice}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Extra Price:</strong> {formData.extraPrice}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Tax Amount:</strong> {formData.taxAmount}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Weight:</strong> {formData.weight}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Length:</strong> {formData.length}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Height:</strong> {formData.height}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Width:</strong> {formData.width}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Total Stock:</strong> {formData.totalStock}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Photos:</Typography>
        <Grid container spacing={1}>
          {formData.photos?.map((photo, index) => (
            <Grid item key={index}>
              <Box
                component="img"
                src={photo}
                alt={`Photo ${index}`}
                sx={{
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  marginRight: 1,
                  marginBottom: 1,
                  width: 100,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductReview;