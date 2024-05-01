import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userQueries } from '~entities/user';
import { pathKeys } from '~shared/lib/react-router';

export function VerifyPage() {
  const { uid, token} = useParams();

  console.log(uid, token);
  
  const {
    mutate: emailActivation,
    isPending,
    isError,
    isSuccess
  } = userQueries.useActivationMutation();

  useEffect(() => {
    emailActivation({ data: { uid, token } });
  }, []); 

  return (
    <div className="my-20 w-[400px] bg-[white] mx-auto rounded-md px-5 py-7 border border-sc-100 flex flex-col gap-3">
      <p className='text-center text-lg font-medium'>Активация вашего email</p>
      {isPending && <CircularProgress/>}
      {isSuccess && <p className='text-center text-lg font-medium text-[green]'>Ваша почта прошла верификацию</p>}
      {isError && <p className='text-center text-lg font-medium text-[red]'>Ваша почта не прошла верификацию</p> }
      <Link to={pathKeys.login()} className="border border-second-100 px-20 py-2 rounded text-lg text-center">Войти</Link>
    </div>
  );
}