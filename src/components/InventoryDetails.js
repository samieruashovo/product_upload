import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const InventoryDetails = ({ formData, setFormData }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
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
        Inventory Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="weight"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Weight"
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
            name="length"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Length"
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
            name="height"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Height"
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
            name="width"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Width"
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
            name="totalStock"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Total Stock"
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
      <Button
        variant="contained"
        type="submit"
        sx={{
          padding: "10px 20px",
          backgroundColor: "white",
          marginTop: 3,
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
  );
};

export default InventoryDetails;
