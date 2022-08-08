import { Control, FieldErrors, UseFormSetValue } from "react-hook-form";
import { IFormPracticeInput } from "../../model/FormMain/FormMain.types";

export interface IFormViewsProps {
  control: Control<IFormPracticeInput, object>;
  setValue: UseFormSetValue<IFormPracticeInput>;
  yupSync: any;
}
