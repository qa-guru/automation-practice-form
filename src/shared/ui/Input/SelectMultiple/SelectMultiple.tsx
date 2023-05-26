import React from "react";
import { Controller } from "react-hook-form";
import { Chip, FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import { IFormInputProps } from "../Input.types";

const InputSelectMultiple: React.FC<IFormInputProps> = ({
  control,
  label,
  name,
  content
}) => {
  const generateSingleSubjects = () => {
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
          <Select
            size={"medium"}
            multiple
            value={value as string[]}
            onChange={onChange}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {selected.map((selectedValue) => (
                  <Box key={selectedValue} p={0.2}>
                    <Chip
                      label={selectedValue}
                      onDelete={() =>
                        onChange((value as string[]).filter((value) => value !== selectedValue))
                      }
                      deleteIcon={
                        <Cancel
                          onMouseDown={(event: React.MouseEvent) =>
                            event.stopPropagation()
                          }
                        />
                      }
                    />
                  </Box>
                ))}
              </Box>
            )}
          >
            {generateSingleSubjects()}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default InputSelectMultiple;
