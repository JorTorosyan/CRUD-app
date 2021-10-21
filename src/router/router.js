import Users from "../pages/users";
import Homes from "../pages/homes";
import CreateUsers from "../pages/users/create";

const Routes = [
    {
        path: '/',
        exact: true,
        component: Users,
    },
    {
        path: '/users',
        exact: true,
        component: Users,
    },
    {
        path: '/homes',
        component: Homes,
    },
    {
        path: '/users/create',
        component: CreateUsers,
    },
];

export default Routes;