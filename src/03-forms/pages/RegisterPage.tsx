import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface IForm {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterPage = () => {
  const {
    data: registerData,
    onChange,
    email,
    name,
    password1,
    password2,
    reset,
    isValidEmail,
  } = useForm<IForm>({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          name='name'
          onChange={onChange}
          placeholder='Name'
          type='text'
          value={name}
          className={`${name.trim().length <= 0 ? 'has-error' : ''}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name='email'
          onChange={onChange}
          placeholder='Email'
          type='email'
          value={email}
          className={`${!isValidEmail(email) ? 'has-error' : ''}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          name='password1'
          onChange={onChange}
          placeholder='Password'
          type='password'
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}
        <input
          name='password2'
          onChange={onChange}
          placeholder='Repat password'
          type='password'
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 &&
          password2.trim() !== password1.trim() && (
            <span>Las contraseñas deben coincidir</span>
          )}

        <button type='submit'>Create</button>
        <button onClick={reset}>Reset form</button>
      </form>
      <code>{JSON.stringify(registerData, null, 3)}</code>
    </div>
  );
};
