import * as yup from "yup";
import "yup-phone";

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "First Name must be at least 3 symbols long")
    .max(15, "First Name must be less than 15 symbols long"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(3, "Last Name must be at least 3 symbols long")
    .max(15, "Last Name must be less than 15 symbols long"),
  email: yup
    .string()
    .required("E-mail is required")
    .email("E-mail is invalid")
    .min(15, "E-mail must be at least 10 symbols long")
    .max(25, "E-mail must be less than 25 symbols long"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^(\+1)?\s*\d{3}[- ]?\d{3}[- ]?\d{4}$/, "Phone number is invalid"),
  gender: yup.string().required("Gender is required"),
});
