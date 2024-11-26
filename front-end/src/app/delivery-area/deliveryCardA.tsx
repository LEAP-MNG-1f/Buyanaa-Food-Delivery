import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DeliveryCardA() {
  return (
    <Card sx={{ width: 588, height: 388 }}>
      <CardContent sx={{ height: "80%", padding: "24px" }}>
        <Typography
          gutterBottom
          sx={{
            fontSize: 20,
            fontWeight: 590,
            borderBottomWidth: 1,
            borderBottomColor: "var(--green)", // Correctly format CSS variable usage
            borderBottomStyle: "solid",
            paddingBottom: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          А бүс
        </Typography>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between pt-4 w-[262px] gap-4">
            <p>Нархан хотхон</p>
            <p>26-р байр</p>
            <p>26-р байр</p>
            <p>45-р байр</p>
            <p>3-р байр</p>
            <p>Хоймор хотхон </p>
            <p>Хоймор хотхон </p>
          </div>{" "}
          <div className="flex flex-col justify-between pt-4 w-[262px] gap-4">
            <p>Нархан хотхон</p>
            <p>26-р байр</p>
            <p>26-р байр</p>
            <p>45-р байр</p>
            <p>3-р байр</p>
            <p>Хоймор хотхон </p>
            <p>Хоймор хотхон </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
