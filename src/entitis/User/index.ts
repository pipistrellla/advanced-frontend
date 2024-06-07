import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';
import { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelector/roleSelector';
import { UserRole } from './model/consts/consts';

export type {
    User,
    UserSchema,
};

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
