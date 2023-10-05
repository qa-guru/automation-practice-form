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
            variant={"outlined"}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            multiline
            inputProps={{
              style: {
                height: "84px"
              },
              "data-testid": `${name}`
            }}
          />
        )}
      />
    </FormControl>
  );
};

export default InputTextArea;
