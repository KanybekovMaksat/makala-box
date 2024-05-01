import { z } from 'zod';
import {
  ActivationData,
  LoginUserDtoSchema,
  TokensDtoSchema,
  UserDtoSchema,
  createUserSchema,
} from './user.contracts';

export type UserDtoSchema = z.infer<typeof UserDtoSchema>;
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>;
export type CreateUserSchema = z.infer<typeof createUserSchema>
export type TokensDtoSchema = z.infer<typeof TokensDtoSchema>;
export type ActivationData = z.infer<typeof ActivationData>;
