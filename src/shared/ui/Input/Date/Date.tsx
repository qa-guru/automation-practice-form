import React from "react";
import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

const InputDate: React.FC<IFormInputProps> = ({
  control,
  label,
  name
}) => {
  const handleDateChange = (date: Dayjs | null): string => dayjs(date).format("DD/MM/YYYY");

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              label={label}
              onChange={(date) => onChange(handleDateChange(date))}
              value={typeof value === "string" ? dayjs(value, "DD/MM/YYYY") : null}
              format="DD/MM/YYYY"
              disableFuture
              slotProps={{
                textField: {
                  error: false,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default InputDate;
