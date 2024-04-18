import { CounterSchema } from 'entitis/Counter';
import { UserSchema } from 'entitis/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema{
    counter:CounterSchema
    user: UserSchema
    loginForm: LoginSchema
}
