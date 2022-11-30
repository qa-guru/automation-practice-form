import { Controller } from "react-hook-form";
import { Form, Typography } from "antd";
import { IFormInputProps } from "../Input.types";
import InputMask from "react-input-mask"
import styles from "./Phone.module.scss"

const InputPhone: React.FC<IFormInputProps> = ({
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
            <InputMask
              mask={"+1 (999) 999 - 99 - 99"}
              className={styles.grey}
              alwaysShowMask={true}
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

export default InputPhone