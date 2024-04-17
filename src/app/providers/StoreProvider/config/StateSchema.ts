import { CounterSchema } from 'entitis/Counter';
import { UserSchema } from 'entitis/User';

export interface StateSchema{
    counter:CounterSchema
    user: UserSchema
}
