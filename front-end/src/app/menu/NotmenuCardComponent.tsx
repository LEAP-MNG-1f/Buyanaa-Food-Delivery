import * as React from "react";
import Button from "@mui/material/Button";

export const NotMenuCardComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-[1200px]">
        <div className="flex justify-between ">
          <Button
            variant="outlined"
            sx={{
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
              "&:focus": {
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
              "&:focus": {
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
              "&:focus": {
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
              "&:focus": {
                color: "#FFF",
                backgroundColor: "var(--green)",
              },
            }}
          >
            Dessert
          </Button>
        </div>
        <div className="flex justify-between py-[60px]">
          {foodCardData.map((foodCard) => {
            return (
              <div key={foodCard._id}>
                {/* <FoodCard foodCard={foodCard} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
