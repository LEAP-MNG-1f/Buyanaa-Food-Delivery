import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CategoryButton() {
  return (
    <div className="w-[1200px]">
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          sx={{
            //   outlineColor: "#D6D8DB",
            color: "#000",
            textsize: "18px",
            textweight: "500",
            borderColor: "#D6D8DB",
            width: "280px",
            height: "43px",
            borderRadius: "8px",
            "&:hover": {
              color: "#FFF",
              backgroundColor: "var(--green)",
            },
          }}
        >
          Breakfast
        </Button>
        <Button
          variant="outlined"
          sx={{
            //   outlineColor: "#D6D8DB",
            color: "#000",
            textsize: "18px",
            textweight: "500",
            borderColor: "#D6D8DB",
            width: "280px",
            height: "43px",
            borderRadius: "8px",
            "&:hover": {
              color: "#FFF",
              backgroundColor: "var(--green)",
            },
          }}
        >
          Soup
        </Button>
        <Button
          variant="outlined"
          sx={{
            //   outlineColor: "#D6D8DB",
            color: "#000",
            textsize: "18px",
            textweight: "500",
            borderColor: "#D6D8DB",
            width: "280px",
            height: "43px",
            borderRadius: "8px",
            "&:hover": {
              color: "#FFF",
              backgroundColor: "var(--green)",
            },
          }}
        >
          Main Course
        </Button>
        <Button
          variant="outlined"
          sx={{
            //   outlineColor: "#D6D8DB",
            color: "#000",
            textsize: "18px",
            textweight: "500",
            borderColor: "#D6D8DB",
            width: "280px",
            height: "43px",
            borderRadius: "8px",
            "&:hover": {
              color: "#FFF",
              backgroundColor: "var(--green)",
            },
          }}
        >
          Dessert
        </Button>
      </Stack>
    </div>
  );
}
