import { Formik, Form, ErrorMessage } from 'formik';
import { z } from 'zod';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

const SignupSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать не менее 6 символов' }),
  confirmPassword: z.string(),
});

export function RegisterPage() {
  return (
    <div className="my-20 w-[400px] bg-[white] mx-auto rounded-md px-5 py-7 border border-sc-100">
      <h1 className='font-bold text-center text-2xl text-pc-500'>Регистрация</h1>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
        }}
        validate={(values) => {
          try {
            SignupSchema.parse(values);
          } catch (error) {
            return error.formErrors.fieldErrors;
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="my-5">
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"

                size="small"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-xs text-[red]"
              />
            </div>
            <div className="my-5">
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="Имя"
                size="small"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-xs text-[red]"
              />
            </div>
            <div className="my-5">
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                size="small"
                label="Фамилия"
              />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div className="my-5">
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Придумайте пароль"
                type="password"
                size="small"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-[red]"
              />
            </div>
            <div className="my-5">
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Подтвердите пароль"
                type="password"
                size="small"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <Button variant="contained" className="w-full my-2 bg-second-100" type="submit">
                Зарегистрироваться
            </Button>
            <p className='flex justify-center gap-1'>
            Уже есть аккаунт?<Link className='underline text-second-100' to={pathKeys.root}>Войти</Link>
            </p>
            
          </Form>
        )}
      </Formik>
    </div>
  );
}
