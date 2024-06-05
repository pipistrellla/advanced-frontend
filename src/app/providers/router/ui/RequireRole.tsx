import { getUserRoles } from 'entitis/User';
import { UserRole } from 'entitis/User/model/types/user';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthRoles {
    children : JSX.Element
    roles?: UserRole[]
}

export function RequireRole({ children, roles } : RequireAuthRoles) {

    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {

        if (!roles)
            return true;

        return roles.some((requiredRole) => {

            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;

        });

    }, [roles, userRoles]);

    if (!hasRequiredRoles)
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;

    return children;

}
