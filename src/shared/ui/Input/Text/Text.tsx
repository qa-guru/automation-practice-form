import { Controller } from "react-hook-form";
import { Form, Input, Typography } from "antd";
import { IFormInputProps } from "../Input.types";
import styles from "./Text.module.scss"

const InputText: React.FC<IFormInputProps> = ({
  control,
  name,
  placeholder,
  label,
  yupSync
}) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Form.Item name={name} rules={[yupSync]}>
            <Input
              className={styles.grey}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default InputText;
