import { Dispatch, SetStateAction } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
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

export interface IFormMainProps {
  setData: Dispatch<SetStateAction<IFormPracticeInput | any>>;
}
