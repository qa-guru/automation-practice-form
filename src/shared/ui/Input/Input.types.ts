import { UseFormSetValue } from "react-hook-form";
import { IFormPracticeInput } from "../../../features/PracticeForm/model/FormMain/FormMain.types";


type IFormInput = IFormPracticeInput;

export interface IFormInputProps {
  control: any;
  name: string | any;
  label?: string;
  placeholder?: string;
  setValue?: UseFormSetValue<IFormInput> | any;
  content?: any;
  direction?: "horizontal" | "vertical";
  min?: number;
  max?: number;
  yupSync?: any;
}
