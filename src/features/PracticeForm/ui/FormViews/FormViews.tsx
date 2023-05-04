import React from "react";
import Ui from "../../../../shared/ui/Input";
import Content from "../../config/ContentPracticeForm";
import { FormControl, FormHelperText, Grid } from "@mui/material";
import { IFormViewsProps } from "./FormViews.types";

const FormViews: React.FC<IFormViewsProps> = ({
  control,
  setValue,
  errors,
  handleChange,
}) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item container spacing={4}>
          <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
            <FormControl fullWidth>
              <Ui.Text
                name="firstName"
                control={control}
                label="First Name"
                placeholder="John"
                inputProps={{ onChange: handleChange("Name", "firstName", 15, 3) }}
              />
              {errors?.firstName && (
                <FormHelperText error>
                  {errors?.firstName.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
            <FormControl fullWidth>
              <Ui.Text
                name="lastName"
                control={control}
                label="Last Name"
                placeholder="Snow"
                inputProps={{ onChange: handleChange("Last Name", "lastName", 15, 3) }}
              />
              {errors?.lastName && (
                <FormHelperText error>
                  {errors?.lastName.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
            <FormControl fullWidth>
              <Ui.Text
                name="email"
                control={control}
                label="E-mail"
                placeholder="name@example.com"
                inputProps={{ onChange: handleChange("E-mail", "email", 25, 15) }}
              />
              {errors?.email && (
                <FormHelperText error>
                  {errors?.email.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
            <FormControl fullWidth>
              <Ui.Phone
                name="phone"
                control={control}
                label="Phone number"
                placeholder="+1 (999) 999 99 99"
                inputProps={{ onChange: handleChange("Phone number", "phone") }}
              />
              {errors?.phone && (
                <FormHelperText error>
                  {errors?.phone.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
            <Ui.SelectOption
              label="Language"
              name="language"
              control={control}
              content={Content.LanguageContent.options}
            />
          </Grid>

          <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
            <Ui.DDD
              label="Date of birth"
              name="dateOfBirth"
              control={control}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3} mb={4} mt={1}>
        <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
          <FormControl fullWidth>
            <Ui.Radio
              name="gender"
              control={control}
              label="Gender:"
              content={Content.GenderContent.options}
            />
            {errors?.gender && (
              <FormHelperText error>
                {errors?.gender.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={6} xs={12}>
          <Ui.Checkbox
            name="hobbies"
            control={control}
            label="Hobbies:"
            setValue={setValue}
            content={Content.HobbiesContent.options}
          />
        </Grid>
      </Grid>

      <Grid container direction={"column"} rowSpacing={3}>
        <Grid item>
          <Ui.SelectMultiple
            name="subjects"
            control={control}
            label="Subjects"
            content={Content.SubjectsContent.options}
          />
        </Grid>
        <Grid item>
          <Ui.SelectConnected
            name="stateCity"
            control={control}
            placeholder="Select"
            label="State/City"
            setValue={setValue}
            content={Content.StateCityContent.options}
          />
        </Grid>
        <Grid item>
          <Ui.Slider name="slider" control={control} label="Slider" />
        </Grid>
        <Grid item>
          <Ui.TextArea name="address" control={control} label="Address" />
        </Grid>
        <Grid item>
          <Ui.FileUpload name="file" control={control} setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
};

export default FormViews;
