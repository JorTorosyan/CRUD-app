import Users from "../pages/users";
import Homes from "../pages/homes";
import CreateUsers from "../pages/users/create";
import CreateHomes from "../pages/homes/create";

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
        path: '/user/create',
        component: CreateUsers,
    },
    {
        path: '/home/create',
        component: CreateHomes,
    },
];

export default Routes;