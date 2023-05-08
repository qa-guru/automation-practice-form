import { Controller } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";
import { IFormInputProps } from "../Input.types";

const InputText: React.FC<IFormInputProps> = ({
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
          <TextField
            fullWidth
            size={"medium"}
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            variant="outlined"
            inputProps={inputProps}
          />
        )}
      />
    </FormControl>
  );
};

export default InputText;
