import { Input, Typography } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";
import styles from "./TextArea.module.scss"
const { TextArea } = Input;


const InputTextArea: React.FC<IFormInputProps> = ({
  name,
  label,
  control,
  placeholder
}) => {
  return (
    <FormItem>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextArea
            className={styles.grey}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </FormItem>
  );
};

export default InputTextArea;
