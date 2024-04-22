import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { sessionQueries } from '~entities/session';
export function LoginPage() {
  const { mutate: loginToken } = sessionQueries.useLoginTokenMutation();
  return (
    <div className="my-[200px] bg-[white] w-[400px]  border border-sc-100 mx-auto rounded-md px-5 py-7 ">
      <h1 className="font-bold text-center text-2xl text-pc-500">
        Авторизация
      </h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(user) => loginToken({ user })}
      >
        <Form>
          <div className="my-5">
            <Field
              as={TextField}
              fullWidth
              id="email"
              name="email"
              label="Email"
              size="small"
            />
            <ErrorMessage name="email" className="text-xs text-[red]" />
          </div>
          <div className="my-5">
            <Field
              as={TextField}
              fullWidth
              id="password"
              name="password"
              label="Введите пароль"
              type="password"
              size="small"
            />
            <ErrorMessage name="password" className="text-xs text-[red]" />
          </div>
          <SubmitButton />
          <Link
            className="flex justify-center underline text-second-100"
            to={pathKeys.register()}
          >
            Пройти регистрацию
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

// const initialUser: sessionTypes.LoginUserDto = {
//   email: '',
//   password: '',
// };

function SubmitButton() {
  const { isValidating, isValid } = useFormikContext();
  return (
    <Button
      variant="contained"
      type="submit"
      className="w-full my-2 bg-second-100"
      disabled={!isValid || isValidating}
    >
      Войти
    </Button>
  );
}
