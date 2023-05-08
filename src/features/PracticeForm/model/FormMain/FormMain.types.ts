import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

export interface IFormPracticeInput {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  dateOfBirth: string;
  subjects: string[];
  hobbies: string[];
  stateCity: string[];
  slider: string;
  address: string;
  language: string;
  file: string;
}

export interface IFormMainProps<T extends FieldValues = IFormPracticeInput> {
  setData: Dispatch<SetStateAction<T | undefined>>;
}
