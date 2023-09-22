import React from "react";
import { Controller } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { IFormInputProps } from "../Input.types";

const InputRadio: React.FC<IFormInputProps> = ({
  control,
  label,
  name,
  content
}) => {
  const generateRadioOptions = () => {
    return content?.map((value, index) => {
      if (typeof value === "string") {
        return (
          <FormControlLabel
            key={index}
            value={value}
            control={
              <Radio
                inputProps={{
                  // @ts-ignore
                  "data-testid": `${name}`
                }}
              />
            }
            label={value}
          />
        );
      }
    });
  };

  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup name={name} value={value} onChange={onChange} row>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default InputRadio;
