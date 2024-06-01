import {
  ActivationData,
  CreateUserSchema,
  LoginUserDto,
  TokensDtoSchema,
  UserDtoSchema,
} from './user.types';
import $api from '~shared/api';

export function getTokenMutation(params: { user: LoginUserDto }) {
  return $api.post<TokensDtoSchema>('jwt/create/', params.user);
}

export function loginUserQuery() {
  return $api.get<UserDtoSchema>('users/me');
}

export function registerUserMutation(params: { user: CreateUserSchema }) {
  return $api.post('users/', params.user);
}

export function emailActivationMutation(params: { data: ActivationData }) {
  return $api.post('users/activation/', params.data);
}
