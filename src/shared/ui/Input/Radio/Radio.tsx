import React from "react";
import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";
import { Form, Radio, Space, Typography } from "antd";

const InputRadio: React.FC<IFormInputProps> = ({
  control,
  label,
  name,
  content,
  direction,
  yupSync
}) => {
  const generateRadioOptions = (content: any[]) => {
    return content.map(singleOptionValue => (
      <Radio key={singleOptionValue.id} value={singleOptionValue.value}>
        {singleOptionValue.label}
      </Radio>
    ));
  };

  return (
    <div>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Form.Item name={name} rules={[yupSync]}>
            <Radio.Group value={value} onChange={onChange}>
              <Space direction={direction}>
                {generateRadioOptions(content)}
              </Space>
            </Radio.Group>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default InputRadio;
