import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: yup
            .string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: yup.string().email('Revisa el correo').required('Requerido'),
          terms: yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: yup
            .string()
            .required('Requerido')
            .notOneOf(['it-jr'], 'Esta opcion no es permitida'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage component='span' name='firstName' />

            <label htmlFor='lastName'>Last name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage component='span' name='lastName' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='text' />
            <ErrorMessage component='span' name='email' />

            <label htmlFor='jobType'>Email</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senir</option>
              <option value='it-jr'>IT Jr.</option>
            </Field>
            <ErrorMessage component='span' name='jobType' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage component='span' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
