import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Minimo 2 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Requerido'),
          email: Yup.string().email('Revise el email').required('Requerido'),
          password: Yup.string()
            .min(6, 'Minimo 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .min(6, 'Minimo 6 caracteres')
            .oneOf([Yup.ref('password')], 'Contraseñas deben coincidir'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <label htmlFor='name'>Name</label>
            <Field name='name' autoComplete='off' />
            <ErrorMessage name='name' component={'span'} />

            <label htmlFor='email'>Email</label>
            <Field name='email' autoComplete='off' type='email' />
            <ErrorMessage name='email' component={'span'} />

            <label htmlFor='password'>Password</label>
            <Field name='password' autoComplete='off' type='password' />
            <ErrorMessage name='password' component={'span'} />

            <label htmlFor='password2'>Confirm</label>
            <Field name='password2' autoComplete='off' type='password' />
            <ErrorMessage name='password2' component={'span'} />

            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
