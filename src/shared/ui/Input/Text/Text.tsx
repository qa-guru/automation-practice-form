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
            data-testid={`${name}`}
            fullWidth
            size={"medium"}
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            variant="outlined"
            inputProps={{ ...inputProps, "data-testid": `${name}` }}
          />
        )}
      />
    </FormControl>
  );
};

export default InputText;
