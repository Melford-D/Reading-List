import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export const FormValidation = () => (
  <Formik
    initialValues={{ text: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Please review", values);
      }, 500);
    }}
    // Here I declare the validation
    validationSchema={Yup.object().shape({
      text: Yup.string()
        .required("Please fill the review section before submission.")
        .min(10, "A minimum of 10 characters is required."),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          {/* <textarea value={values.text} /> */}
          {/* <input
            type="submit"
            value="submit your review"
            onChange={handleChange}
            onBlur={handleBlur}
            // disabled={isSubmitting}
          /> */}
        </form>
      );
    }}
  </Formik>
);
