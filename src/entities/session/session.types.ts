import { z } from 'zod';
import {
  LoginUserDtoSchema,
  TokensDtoSchema,
  UserDtoSchema,
} from './session.contracts';

export type UserDtoSchema = z.infer<typeof UserDtoSchema>;
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>;
export type TokensDtoSchema = z.infer<typeof TokensDtoSchema>;
