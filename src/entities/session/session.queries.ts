import { useMutation, useQuery } from '@tanstack/react-query';
import { LoginUserDto, TokensDtoSchema, UserDtoSchema } from './session.types';
import $api from '~shared/api';
import { setCookie } from 'typescript-cookie';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

const keys = {
  root: () => ['session'],
  loginToken: () => [...keys.root(), 'loginToken'] as const,
  loginUser: () => [...keys.root(), 'loginUser'] as const,
};

export function loginTokenMutation(params: { user: LoginUserDto }) {
  return $api.post<TokensDtoSchema>('jwt/create', params.user);
}

export function loginUserMutation(){
  return $api.get<UserDtoSchema>('users/me')
}

export function useloginUserQuery() {
  return useQuery({
    queryKey: keys.loginUser(),
    queryFn: loginUserMutation
  });
}

export function useLoginTokenMutation() {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: keys.loginToken(),
    mutationFn: loginTokenMutation,
    onSuccess: async (response) => {
      setCookie('access', response.data.access);
      setCookie('refresh', response.data.refresh);
      navigate(pathKeys.profile.root());
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });
}
