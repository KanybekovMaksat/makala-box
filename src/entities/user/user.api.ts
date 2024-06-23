import axios from 'axios';
import {
  ActivationData,
  CreateUserSchema,
  EditUserProfile,
  LoginUserDto,
  ResetPasswordConfirm,
  TokensDtoSchema,
  UserDtoSchema,
} from './user.types';
import $api from '~shared/api';

const API = 'https://api.makalabox.com/api/users';

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

export function editUserProfile(params: { user: EditUserProfile }) {
  return $api.patch('users/me/', params.user);
}

export function getUserByUsername(username: string) {
  return axios.get(`${API}/${username}/`);
}

export function resetPasswordEmail(email: string) {
  return axios.post(`${API}/reset_password/`, email);
}

export function resetPasswordConfirm(params: { data: ResetPasswordConfirm }) {
  return axios.post(`${API}/reset_password_confirm/`, params.data);
}
