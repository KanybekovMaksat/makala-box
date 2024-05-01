import { Formik, Form, ErrorMessage, useFormikContext, Field } from 'formik';
import { Button, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { userContracts, userQueries, userTypes } from '~entities/user';
import { formikContract } from '~shared/lib/zod';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const initialUser: userTypes.CreateUserSchema = {
  email: '',
  username: '',
  firstName: '',
  lastName: '',
  password: '',
};

export function RegisterPage() {
  const [visibility, setVisibility] = useState(false);
  const handleClickShowPassword = () =>
    setVisibility((visibility) => !visibility);

  const {
    mutate: registerUser,
    isPending,
    isError,
  } = userQueries.useRegisterMutation();

  return (
    <div className="my-20 w-[400px] bg-[white] mx-auto rounded-md px-5 py-7 border border-sc-100">
      <h1 className="font-bold text-center text-2xl text-pc-500">
        Регистрация
      </h1>
      <Formik
        initialValues={initialUser}
        validate={validateForm}
        onSubmit={(user) => registerUser({ user })}
      >
        <Form>
          <fieldset disabled={isPending}>
            <fieldset className="my-5">
              <Field
                as={TextField}
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
            </fieldset>
            <fieldset className="my-5">
              <Field
                as={TextField}
                fullWidth
                id="username"
                name="username"
                label="Псевдоним"
                size="small"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-xs text-[red]"
              />
            </fieldset>
            <fieldset className="my-5">
              <Field
                as={TextField}
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
            </fieldset>
            <fieldset className="my-5">
              <Field
                as={TextField}
                fullWidth
                id="lastName"
                name="lastName"
                size="small"
                label="Фамилия"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-xs text-[red]"
              />
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
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-[red]"
              />
            </fieldset>
            <fieldset className="my-5">
              <Field
                as={TextField}
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Подтвердите пароль"
                type={visibility ? 'text' : 'password'}
                size="small"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </fieldset>
          </fieldset>
          <SubmitButton />
        </Form>
      </Formik>
      {isError && (
        <p className="text-center text-xs text-[red]">
          Неправильный пароль или логин!
        </p>
      )}
      {/* <Button variant="contained" className="w-full mb-1 bg-[red]">
        Войти с Google
      </Button> */}
      <p className="flex justify-center gap-1">
        Уже есть аккаунт?
        <Link className="underline text-second-100" to={pathKeys.login()}>
          Войти
        </Link>
      </p>
    </div>
  );
}

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

const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Неправильный формат email';
  }

  if (!values.username) {
    errors.username = 'Обязательное поле';
  }

  if (!values.firstName) {
    errors.firstName = 'Обязательное поле';
  }

  if (!values.lastName) {
    errors.lastName = 'Обязательное поле';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  } else if (values.password.length < 8) {
    errors.password = 'Пароль должен содержать минимум 8 символов';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Обязательное поле';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Пароли не совпадают';
  }

  return errors;
};
