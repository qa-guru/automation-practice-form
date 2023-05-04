import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { defaultValues } from "../../config/defaultValues";
import PracticeFormViews from "../../ui/FormViews/FormViews";
import { Button, Typography, Box, Grid } from "@mui/material";
import { IFormMainProps, IFormPracticeInput } from "./FormMain.types";
import { IFormViewsProps } from "../../ui/FormViews/FormViews.types";
import { validationSchema } from "../../helpers/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const FormMain: React.FC<IFormMainProps> = ({ setData }) => {
  const { handleSubmit, control, setValue, reset, formState: { errors }, trigger, setError } = useForm<IFormPracticeInput>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const [formKey, setFormKey] = useState(0);

  const resetForm = () => {
    reset(defaultValues);
    setFormKey(formKey + 1);
  };

  const onSubmit: SubmitHandler<IFormPracticeInput> = data => {
    setData(data);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  };

  const handleChange: IFormViewsProps["handleChange"] = (title, name, max, min) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;

      trigger(name).then((isValid: any) => {
        if (isValid && !value) {
          setError(name, {
            type: "manual",
            message: `${title} is required`,
          });
        } else if (isValid && max !== undefined && value.length > max) {
          setError(name, {
            type: "manual",
            message: `${title} must be less than ${max} symbols long`,
          });
        } else if (isValid && min !== undefined && value.length < min) {
          setError(name, {
            type: "manual",
            message: `${title} must be at least ${min} symbols long`,
          });
        }
      });
    };

  return (
    <Grid m={3}>
      <Box mb={2}>
        <Typography variant={"h4"}>Practice form</Typography>
      </Box>
      <form key={formKey} onSubmit={handleSubmit(onSubmit)}>
        <PracticeFormViews
          errors={errors}
          setValue={setValue}
          control={control}
          handleChange={handleChange}
        />
        <Grid container my={2} columnSpacing={1}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={resetForm}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
          <footer>
            {/* <Typography>© QA GURU</Typography> */}
          </footer>
        </Grid>
      </form>
    </Grid>
  );
};

export default FormMain;
