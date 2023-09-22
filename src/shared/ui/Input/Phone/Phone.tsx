import React from "react";
import { Controller } from "react-hook-form";
import { FormControl } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { IFormInputProps } from "../Input.types";

const InputPhone: React.FC<IFormInputProps> = ({
  control,
  name,
  placeholder,
  label,
  inputProps
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <MuiTelInput
              size={"medium"}
              name={name}
              label={label}
              onlyCountries={["US"]}
              defaultCountry={"US"}
              value={Array.isArray(value) ? value.join(", ") : value}
              onChange={onChange}
              placeholder={placeholder}
              inputProps={{ ...inputProps, "data-testid": `${name}` }}
            />
          </FormControl>
        )}
      />
    </FormControl>
  );
};

export default InputPhone;
