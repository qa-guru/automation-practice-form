import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { IFormInputProps } from "../Input.types";

const InputSelectOption: React.FC<IFormInputProps> = ({
  name,
  control,
  label,
  content
}) => {
  const generateSingleOptions = () => {
    return content?.map((value, index) => {
      if (typeof value === "string")
        return (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        );
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel>
        {label}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            <MenuItem value="" disabled />
            {generateSingleOptions()}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default InputSelectOption;