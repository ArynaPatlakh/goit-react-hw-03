import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";
const ContactForm = ({ handleSubmit }) => {
  const error = Yup.object().shape({
    userName: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
    userNumber: Yup.number()
      .required("Required!")
      .typeError("Must be a number"),
  });
  return (
    <Formik
      initialValues={{ userName: "", userNumber: "" }}
      onSubmit={handleSubmit}
      validationSchema={error}
    >
      <Form className={s.form}>
        <label htmlFor="userName">Name</label>
        <Field name="userName"></Field>
        <ErrorMessage className={s.error} name="userName" component="p" />
        <label htmlFor="userNumber">Number</label>
        <Field name="userNumber"></Field>
        <ErrorMessage className={s.error} name="userNumber" component="p" />
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
