import { UserRole } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    getJsonSettings,
    getJsonSettingsByKey,
    useJsonSettings,
    useJsonSettingsByKey,
} from './model/selectors/jsonSettingsSelector/jsonSettingsSelector';
import {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector/roleSelector';
import { initAuthData } from './model/services/initAuthData';
import { saveJsonSettings } from './model/services/saveJsonSettings';
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
    getJsonSettings,
    getJsonSettingsByKey,
    useJsonSettings,
    useJsonSettingsByKey,
    saveJsonSettings,
    initAuthData,
};
