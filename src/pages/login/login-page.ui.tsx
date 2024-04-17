import { Formik, Form, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { z } from 'zod';


const SignupSchema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z
      .string()
      .min(6, { message: 'Пароль должен содержать не менее 6 символов' }),
    confirmPassword: z.string(),
  });
  
export function LoginPage() {
  return (
    <div className="my-[200px] bg-[white] w-[320px]  border border-sc-100 mx-auto rounded-md px-5 py-7 ">
      <h1 className="font-bold text-center text-2xl text-pc-500">
        Авторизация
      </h1>
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
                id="password"
                name="password"
                label="Введите пароль"
                type="password"
                size="small"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-[red]"
              />
            </div>

            <Button variant='contained' className='w-full my-2 bg-second-100'>Войти</Button>
           
            <Link className='flex justify-center underline text-second-100' to={pathKeys.register()}>Пройти регистрацию</Link>
           
        </Form>
      </Formik>
    </div>
  );
}
