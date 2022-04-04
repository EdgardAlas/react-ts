import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

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
            <MyTextInput
              label='First name'
              name='firstName'
              type='text'
              placeholder='First Name'
            />

            <MyTextInput
              label='Last name'
              name='LastName'
              type='text'
              placeholder='Last Name'
            />

            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Email'
            />

            <MySelect label='Job type' name='jobType' as='select'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senir</option>
              <option value='it-jr'>IT Jr.</option>
            </MySelect>

            <MyCheckBox label='Terms and conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
