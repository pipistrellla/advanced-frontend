import { User } from 'entitis/User';

export interface Comment {
    id: string
    user: User
    text:string
}
