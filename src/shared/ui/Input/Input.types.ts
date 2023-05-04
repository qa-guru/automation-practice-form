import { Control, FieldValues, UseFormSetValue } from "react-hook-form";
import { InputBaseComponentProps } from "@mui/material";
import { IFormPracticeInput } from "../../../features/PracticeForm/model/FormMain/FormMain.types";

type IFormInput = IFormPracticeInput;

export interface TypeOptions {
  state: string;
  cities: string[];
}
export interface IFormInputProps<T extends FieldValues = IFormInput> {
  control: Control<T>;
  name: keyof T;
  label?: string;
  placeholder?: string;
  setValue?: UseFormSetValue<T>;
  content?: string[] | TypeOptions[];
  min?: number;
  max?: number;
  title?: string;
  mask?: string;
  reason?: string;
  inputProps?: InputBaseComponentProps;
}
