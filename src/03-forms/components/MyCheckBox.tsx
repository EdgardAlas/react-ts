import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyCheckBox = ({ label, ...rest }: Props) => {
  const [field] = useField({ ...rest, type: 'checkbox' });
  //   console.log(field, meta);
  return (
    <>
      <label>
        <input type='checkbox' className='text-input' {...field} {...rest} />
        {label}
      </label>
      <ErrorMessage name={rest.name} component='span' />
    </>
  );
};
