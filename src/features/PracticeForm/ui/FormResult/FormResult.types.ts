import { IFormPracticeInput } from "../../model/FormMain/FormMain.types";
import {FieldValues} from "react-hook-form";

export interface IFormResult<T extends FieldValues = IFormPracticeInput> {
  data: T;
}