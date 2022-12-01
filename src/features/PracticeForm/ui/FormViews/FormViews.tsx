import React from "react";
import Ui from "../../../../shared/ui/Input";
import Content from "../../config/ContentPracticeForm";
import styles from "./FormViews.module.scss";
import { IFormViewsProps } from "./FormViews.types";

const FormViews: React.FC<IFormViewsProps> = ({
  control,
  setValue,
  yupSync,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Ui.Text
          name="firstName"
          control={control}
          label="First Name"
          yupSync={yupSync}
          placeholder="John"
        />
        <Ui.Text
          name="lastName"
          control={control}
          label="Last Name"
          yupSync={yupSync}
          placeholder="Snow"
        />
      </div>

      <div className={styles.wrapper}>
        <Ui.Text
          name="email"
          control={control}
          label="Email"
          placeholder="name@example.com"
          yupSync={yupSync}
        />
          <Ui.Phone 
            name="phone"
            control={control}
            label="Phone"
            yupSync={yupSync}
            placeholder="+1 (999) 999 99 99"
          />
      </div>

      <div>
        <Ui.SelectOption
          label="Select Language"
          name="language"
          control={control}
          content={Content.LanguageContent.options}
        />
        <Ui.DDD label="Birthdate" name="birthDate" control={control} />
      </div>

      <div className={styles.wrapp}>
        <Ui.Radio
          name="gender"
          control={control}
          label="Gender:"
          content={Content.GenderContent.options}
          yupSync={yupSync}
        />
        <Ui.Checkbox
          name="hobbies"
          control={control}
          label="Hobbies:"
          content={Content.HobbiesContent.options}
        />
      </div>

      <div className={styles.container}>
        <Ui.SelectMultiple
          name="subjects"
          control={control}
          label="Subjects"
          content={Content.SubjectsContent.subjects}
        />
      </div>

      <div>
        <Ui.SelectCascader
          name="stateCity"
          control={control}
          placeholder="Select"
          label="Select State and City:"
          setValue={setValue}
          content={Content.StateCityContent.options}
        />
      </div>

      <div className={styles.container}>
        <Ui.Slider name="slider" control={control} label="Slider" />
      </div>

      <Ui.TextArea name="address" control={control} label="Address" />
      <Ui.FileUpload name="file"  control={control} setValue={setValue} />
    </>
  );
};

export default FormViews;
