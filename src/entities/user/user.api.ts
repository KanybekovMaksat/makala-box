import { LoginUserDto, TokensDtoSchema, UserDtoSchema } from './user.types';
import  $api  from '~shared/api';

export function getTokenMutation(params: { user: LoginUserDto }) {
  return $api.post<TokensDtoSchema>('jwt/create', params.user);
}

export function loginUserQuery() {
  return $api.get<UserDtoSchema>('users/me');
}
