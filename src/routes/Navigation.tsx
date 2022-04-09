import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import {
  DynamicForm,
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../03-forms/pages';

import logo from '../logo.svg';
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='' />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/register'
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/formik-basic'
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/formik-yup'
              >
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/formik-components'
              >
                Formik components
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/formik-abstractation'
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/register-formik'
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/dynamic-form'
              >
                Dynamic form
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='formik-basic' element={<FormikBasicPage />} />
          <Route path='formik-yup' element={<FormikYupPage />} />
          <Route path='formik-components' element={<FormikComponents />} />
          <Route
            path='formik-abstractation'
            element={<FormikAbstractation />}
          />
          <Route path='register-formik' element={<RegisterFormikPage />} />
          <Route path='dynamic-form' element={<DynamicForm />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='/register' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
