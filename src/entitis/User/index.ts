import { UserRole } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector/roleSelector';
import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export type { User, UserSchema };

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    isUserManager,
    getUserRoles,
    UserRole,
};
