import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }

    if (rule.type === 'email') {
      schema = schema.email('Revise el email');
    }

    if (rule.type === 'minLenght') {
      schema = schema.min(
        (rule as any).value,
        `Minimo de ${(rule as any).value}`
      );
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  console.log(formJSON);
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form noValidate>
            {formJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value=''>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              return <span>El type no es soportado {type}</span>;
            })}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
