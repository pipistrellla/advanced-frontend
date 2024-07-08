import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line personal-use-fsd-plugin/layer-imports
import { UserRole } from '@/entitis/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
