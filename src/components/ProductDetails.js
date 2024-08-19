import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const ProductDetails = ({ formData, setFormData }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#20c18d",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: "30px",
        }}
      >
        Add New Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Title"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                fullWidth
                variant="outlined"
                multiline
                rows={3}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Category"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="regularPrice"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Regular Price"
                fullWidth
                variant="outlined"
                type="number"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="extraPrice"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Extra Price"
                fullWidth
                variant="outlined"
                type="number"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="taxAmount"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Tax Amount"
                fullWidth
                variant="outlined"
                type="number"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            fontSize: "19px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
