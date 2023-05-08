import React from "react";
import { Controller } from "react-hook-form";
import { Slider, FormLabel, Box, FormControl } from "@mui/material";
import { IFormInputProps } from "../Input.types";

const InputSlider: React.FC<IFormInputProps> = ({
  name,
  control,
  label,
  min = 0,
  max = 100
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Box>
            <Box>
              <Slider
                min={min}
                max={max}
                onChange={(_, value) => onChange(value)}
                value={typeof value === "number" ? value : min}
              />
            </Box>
            <Box>
              <span>{value}</span>
            </Box>
          </Box>
        )}
      />
    </FormControl>
  );
};

export default InputSlider;
