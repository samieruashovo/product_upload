import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const AddPhotos = ({ formData, setFormData }) => {
  const [photos, setPhotos] = useState(formData.photos || []);

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const updatedPhotos = [
      ...photos,
      ...files.map((file) => URL.createObjectURL(file)),
    ];
    setPhotos(updatedPhotos);
    setFormData((prevData) => ({ ...prevData, photos: updatedPhotos }));
  };

  return (
    <Box
      sx={{
        margin: "50px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "50vh",
        backgroundColor: "#e0e0e0",
        border: "2px dashed #888",
        borderRadius: "20px",
        borderStyle: "dashed",
        borderColor: "#888",
        borderWidth: "2px",
        borderRadius: "20px",
      }}
    >
      <Button
        variant="contained"
        component="label"
        sx={{
          backgroundColor: "#20c18d",
          "&:hover": {
            backgroundColor: "#20c18d",
          },
          marginBottom: 2,
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        Upload Photos
        <input type="file" hidden multiple onChange={handlePhotoUpload} />
      </Button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            width="100"
            style={{
              border: "2px solid #ccc",
              borderRadius: "4px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AddPhotos;
