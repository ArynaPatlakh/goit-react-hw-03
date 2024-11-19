import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

import s from "./ContactForm.module.css";
const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ userName: "", userNumber: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label htmlFor="userName">Name</label>
        <Field name="userName"></Field>
        <label htmlFor="userNumber">Number</label>
        <Field name="userNumber"></Field>
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
