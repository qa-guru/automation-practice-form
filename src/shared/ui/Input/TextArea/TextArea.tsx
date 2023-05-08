import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";

const InputTextArea: React.FC<IFormInputProps> = ({
  name,
  label,
  control,
  placeholder
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            size={"medium"}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </FormControl>
  );
};

export default InputTextArea;
