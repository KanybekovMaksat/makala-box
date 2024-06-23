import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userQueries } from '~entities/user';
import { pathKeys } from '~shared/lib/react-router';

export function ChangePasswordPage() {
  const { uid, token } = useParams();
  const [newPassword, setNewPassword] = useState("")
  const {
    mutate: resetPassword,
    isPending: isActivationPending,
    isError: isActivationError,
    isSuccess: isActivationSuccess,
  } = userQueries.useResetPasword();

  resetPassword({ data: { uid, token, newPassword } });

  return (
    <div className="my-20 w-[400px] bg-[white] mx-auto rounded-md px-5 py-7 border border-sc-100 flex flex-col gap-3">
      <p className="text-center text-lg font-medium">Изменение пароля</p>
      <Link
        to={pathKeys.login()}
        className="border border-second-100 px-20 py-2 rounded text-lg text-center"
      >
        Войти
      </Link>
    </div>
  );
}
