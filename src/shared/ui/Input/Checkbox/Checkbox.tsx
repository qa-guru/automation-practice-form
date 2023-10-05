import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormLabel,
  FormControl
} from "@mui/material";
import { IFormInputProps } from "../Input.types";

const InputCheckbox: React.FC<IFormInputProps> = ({
  name,
  control,
  setValue,
  label,
  content
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const generateCheckboxOptions = () => {
    return content?.map((value, index) => {
      if (typeof value === "string") {
        return (
          <FormControlLabel
            key={index}
            value={value}
            control={
              <Checkbox
                onChange={handleChange(value)}
                inputProps={{ ...({ "data-testid": `${name}` } as any) }}
              />
            }
            label={value}
          />
        );
      }
    });
  };

  const handleChange = (value: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setSelectedValues(prevState => [...prevState, value]);
    } else {
      setSelectedValues(prevState => prevState.filter(item => item !== value));
    }
  };

  useEffect(() => {
    if (setValue) setValue(name, selectedValues);
  }, [name, selectedValues, setValue]);

  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={selectedValues}
        render={({ field }) => (
          <FormGroup onChange={field.onChange} row>
            {generateCheckboxOptions()}
          </FormGroup>
        )}
      />
    </FormControl>
  );
};

export default InputCheckbox;
