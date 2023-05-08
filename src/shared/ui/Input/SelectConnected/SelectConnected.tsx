import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FormControl, Select, MenuItem, SelectChangeEvent, InputLabel, Box, Stack } from "@mui/material";
import { IFormInputProps } from "../Input.types";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const InputSelectConnected: React.FC<IFormInputProps> = ({
  name,
  setValue,
  control,
  content,
  label,
}) => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  function convertLocationSchema(): Option[] {
    return (content || []).map((option) => {
      if (typeof option === "string") {
        return {
          value: option,
          label: option,
        };
      }
      return {
        value: option.state,
        label: option.state,
        children: option.cities.map((city) => ({
          value: city,
          label: city,
        })),
      };
    });
  }

  useEffect(() => {
    if (selectedState && selectedCity && setValue) {
      setValue(name, `${selectedState}, ${selectedCity}`);
    }
  }, [selectedState, selectedCity, setValue]);

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value);
  };

  const renderStateOptions = () =>
    convertLocationSchema().map((option: Option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ));

  const renderCityOptions = () =>
    convertLocationSchema()
      .find((option: Option) => option.value === selectedState)
      ?.children?.map((option: Option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ));

  return (
    <Stack>
      <Controller
        control={control}
        name={name}
        render={() => (
          <FormControl fullWidth>
            <InputLabel>
              {label}
            </InputLabel>
            <Select value={selectedState} onChange={handleStateChange}>
              <MenuItem value="" />
              {renderStateOptions()}
            </Select>
            {selectedState && (
              <Box mt={3}>
                <FormControl fullWidth>
                  <Select value={selectedCity} onChange={handleCityChange}>
                    <MenuItem value="" />
                    {renderCityOptions()}
                  </Select>
                </FormControl>
              </Box>
            )}
          </FormControl>
        )}
      />
    </Stack>
  );
};

export default InputSelectConnected;