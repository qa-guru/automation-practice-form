import {
  Control,
  UseFormSetValue,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { IFormPracticeInput } from "../../model/FormMain/FormMain.types";

export interface IFormViewsProps<T extends FieldValues = IFormPracticeInput> {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  errors: FieldErrors<T>;
  handleChange: (
    title: string,
    name: keyof IFormPracticeInput,
    max?: number,
    min?: number
  ) => (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
