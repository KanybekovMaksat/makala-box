import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import { userContracts, userQueries, userTypes } from '~entities/user';
import { Button, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { formikContract } from '~shared/lib/zod';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function LoginPage() {
  const [visibility, setVisibility] = useState(false);

  const handleClickShowPassword = () =>
    setVisibility((visibility) => !visibility);

  const {
    mutate: loginToken,
    isPending,
    isError,
  } = userQueries.useGetTokenMutation();

  return (
    <div className="my-[200px] bg-[white] w-[400px]  border border-sc-100 mx-auto rounded-md px-5 py-7 ">
      <h1 className="font-bold text-center text-2xl text-pc-500">
        Авторизация
      </h1>
      <Formik
        initialValues={initialUser}
        validate={validateForm}
        onSubmit={(user) => loginToken({ user })}
      >
        <Form>
          <fieldset disabled={isPending} className="text-xs text-[red]">
            <fieldset  className="my-5">
              <Field
                as={TextField}
                fullWidth
                id="email"
                name="email"
                label="Email"
                size="small"
              />
              <ErrorMessage name="email" />
            </fieldset>
            <fieldset className="my-5">
              <Field
                as={TextField}
                fullWidth
                id="password"
                name="password"
                label="Введите пароль"
                type={visibility ? 'text' : 'password'}
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="password-visibility"
                      size="small"
                      color="info"
                      onClick={handleClickShowPassword}
                    >
                      {visibility ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
              <ErrorMessage name="password" />
            </fieldset>
          </fieldset>
          <SubmitButton />
        </Form>
      </Formik>
      {isError && (
        <p className="text-center text-xs text-[red]">
          Ошибка при выполнении запроса
        </p>
      )}
      <Link
        className="mt-4 flex justify-center underline text-second-100"
        to={pathKeys.register()}
      >
        Пройти регистрацию
      </Link>
    </div>
  );
}

const initialUser: userTypes.LoginUserDto = {
  email: '',
  password: '',
};

function SubmitButton() {
  const { isValidating, isValid } = useFormikContext();
  return (
    <Button
      variant="contained"
      type="submit"
      className="w-full mb-2 bg-second-100"
      disabled={!isValid || isValidating}
    >
      Войти
    </Button>
  );
}

const validateForm = formikContract(userContracts.LoginUserDtoSchema);
