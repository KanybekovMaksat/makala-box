import { getTokenMutation, loginUserQuery } from './user.api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { pathKeys } from '~shared/lib/react-router';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'typescript-cookie';
import { toast } from 'react-toastify';

const keys = {
  root: () => ['user'],
  getToken: () => [...keys.root(), 'getToken'] as const,
  loginUser: () => [...keys.root(), 'loginUser'] as const,
};

export function useLoginUserQuery() {
  return useQuery({
    queryKey: keys.loginUser(),
    queryFn: loginUserQuery,
  });
}

export function useGetTokenMutation() {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: keys.getToken(),
    mutationFn: getTokenMutation,
    onSuccess: async (response) => {
      setCookie('access', response.data.access);
      setCookie('refresh', response.data.refresh);
      toast.success('Вы успешно авторизовались!', { autoClose: 500 });
      navigate(pathKeys.profile.root());
    },
    onError: (error) => {
      const errorMessage = error.response
        ? error.response.data.detail
        : 'Ошибка при выполнении запроса';
      toast.error(errorMessage);
    },
  });
}
