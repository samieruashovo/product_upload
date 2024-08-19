import React from "react";
import MultiStageForm from "./components/MultiStageForm";
import ProductList from "./components/ProductList";
import Typography from "@mui/material/Typography";
function App() {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#20c18d",
          marginBottom: 4,
        }}
      >
        Product Management App
      </Typography>
      <MultiStageForm />
      <ProductList />
    </div>
  );
}
{
}

export default App;
