"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BulletIcon } from "../svg/bulletIcon";

const steps = [
  "Step 1: Хаягийн мэдээлэл оруулах",
  "Step 2: Захиалга баталгаажуулах",
];

export default function SimpleStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepButton onClick={() => setActiveStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: "20px" }}>
        {activeStep === 0 && (
          <div className="flex flex-col gap-6">
            <div className="border p-4 flex items-center">
              <BulletIcon />
              <div style={{ marginLeft: "10px" }}>
                <p className="text-sm">Алхам 1</p>
                <p className="text-xl">Хаягийн мэдээлэл оруулах</p>
                <p className="text-base text-blue-600">Хүлээгдэж байна</p>
              </div>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="flex flex-col gap-6">
            <div className="border p-4 flex items-center">
              <BulletIcon />
              <div style={{ marginLeft: "10px" }}>
                <p className="text-sm">Алхам 2</p>
                <p className="text-xl">Захиалга баталгаажуулах</p>
                <p className="text-base text-blue-600">Хүлээгдэж байна</p>
              </div>
            </div>
          </div>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
          >
            {activeStep === steps.length - 1 ? "Reset" : "Next"}
          </Button>
        </Box>
      </div>
    </Box>
  );
}
