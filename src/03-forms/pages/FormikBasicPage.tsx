import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length >= 15) {
          errors.firstName = 'Must be 15 characters';
        }

        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length >= 15) {
          errors.lastName = 'Must be 15 characters';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        return errors;
      },
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
        />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
