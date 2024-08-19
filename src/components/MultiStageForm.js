import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import InventoryDetails from "./InventoryDetails";
import AddPhotos from "./AddPhotos";
import Review from "./Review";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  StepConnector,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { makeStyles, withStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import PreviewIcon from "@mui/icons-material/Preview";
// import SettingsIcon from "@mui/material/ic";
// import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import VideoLabelIcon from "@material-ui/icons/VideoLabel";
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, #20c18d 0%, #20c18d 50%, #20c18d 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, #20c18d 0%, #20c18d 50%, #20c18d 100%)",
  },
});
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ProductionQuantityLimitsIcon />,
    2: <InventoryIcon />,
    3: <CropOriginalIcon />,
    4: <PreviewIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, #20c18d 0%, #20c18d 50%, #20c18d 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, #20c18d 0%, #20c18d 50%, #20c18d 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    paddingBottom: 3,
  },
})(StepConnector);

const MultiStageForm = () => {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const steps = [
    "Product Details",
    "Inventory Details",
    "Add Photos",
    "Review",
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      dispatch(addProduct({ ...formData, id: uuidv4() }));
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        style={{ padding: "16px", marginBottom: "50px" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <ProductDetails formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 1 && (
        <InventoryDetails formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 2 && (
        <AddPhotos formData={formData} setFormData={setFormData} />
      )}
      {activeStep === 3 && <Review formData={formData} />}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 3,
        }}
      >
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid grey",
            fontSize: "19px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            padding: "10px 20px",
            backgroundColor: "#20c18d",
            color: "white",
            fontSize: "19px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              color: "black",
            },
          }}
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </div>
  );
};

export default MultiStageForm;
