
import React from "react";
import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";

import FormItem from "antd/lib/form/FormItem";
import { Typography } from "antd";
import { SelectDatepicker as SelectDatePicker } from 'react-select-datepicker';

const { Text } = Typography;


const InputDate: React.FC<IFormInputProps> = ({ control, label, name }) => {
  return (
    <FormItem>

      <Text>{label}</Text>
      <Controller
        defaultValue=""
        name={name}
        control={control}
        render={ ({ field  }) => (
          <SelectDatePicker
          hideLabels
          order="day/month/year"
          onDateChange={(e) => field.onChange(e)}
          />

        )}
      />
    </FormItem>
  );
};

export default InputDate;






