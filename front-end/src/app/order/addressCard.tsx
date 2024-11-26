"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PlaceIcon from "@mui/icons-material/Place";

export default function AddressCard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 384,
          height: 564,
        },
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: "16px", padding: "24px" }}>
        <div>
          <p className="text-sm">Хаяг аа оруулна уу</p>
          <FormControl
            sx={{
              m: 1,
              minWidth: 384,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ECEDF0", // Custom border color
              },
              backgroundColor: "#F7F7F8",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                backgroundColor: "var(--green)", // Change border on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                backgroundColor: "var(--green)", // Change border on focus
              },
            }}
          >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <PlaceIcon sx={{ marginRight: 1 }} />
                <em>Дүүрэг сонгоно уу</em>
              </MenuItem>
              <MenuItem value={10}>
                <PlaceIcon sx={{ marginRight: 1 }} />
                Баянзүрх дүүрэг
              </MenuItem>
              <MenuItem value={20}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                Хан-Уул дүүрэг
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                Баянгол дүүрэг
              </MenuItem>
              <MenuItem value={20}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                Сонгинохайрхан дүүрэг
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                Чингэлтэй дүүрэг
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 384,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ECEDF0", // Custom border color
              },
              backgroundColor: "#F7F7F8",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                backgroundColor: "var(--green)", // Change border on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                backgroundColor: "var(--green)", // Change border on focus
              },
            }}
          >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <PlaceIcon sx={{ marginRight: 1 }} />
                <em>Хороо сонгоно уу</em>
              </MenuItem>
              <MenuItem value={10}>
                <PlaceIcon sx={{ marginRight: 1 }} />
                1-р хороо
              </MenuItem>
              <MenuItem value={20}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                2-р хороо
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                3-р хороо
              </MenuItem>
              <MenuItem value={20}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                4-р хороо
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                5-р хороо
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                6-р хороо
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                7-р хороо
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 384,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ECEDF0", // Custom border color
              },
              backgroundColor: "#F7F7F8",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                backgroundColor: "var(--green)", // Change border on hover
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                backgroundColor: "var(--green)", // Change border on focus
              },
            }}
          >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <PlaceIcon sx={{ marginRight: 1 }} />
                <em>Байр, гудамж сонгоно уу</em>
              </MenuItem>
              <MenuItem value={10}>
                <PlaceIcon sx={{ marginRight: 1 }} />
                Нархан хотхон
              </MenuItem>
              <MenuItem value={20}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                26-р байр
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                Хоймор хотхон
              </MenuItem>
              <MenuItem value={20}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                45-р байр
              </MenuItem>
              <MenuItem value={30}>
                {" "}
                <PlaceIcon sx={{ marginRight: 1 }} />
                Зайсан хотхон
              </MenuItem>
            </Select>
          </FormControl>
          <textarea
            className="h-[112px] px-4 py-2 text-[#F7F7F8]"
            placeholder="Орц, давхар, орцны код ..."
          />
          <input type="text" placeholder="Утасны дугаараа оруулна уу" />
          <input type="checkbox" />
        </div>
      </Paper>
    </Box>
  );
}
