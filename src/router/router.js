import Users from "../pages/users";
import Homes from "../pages/homes";
import CreateUsers from "../pages/users/create";
import EditUsers from "../pages/users/edit";
import CreateHomes from "../pages/homes/create";
import EditHomes from "../pages/homes/edit";


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
        path: '/user/create',
        component: CreateUsers,
    },
    {
        path: '/user/edit/',
        component: EditUsers,
    },
    {
        path: '/homes',
        component: Homes,
    },
    {
        path: '/home/create',
        component: CreateHomes,
    },
    {
        path: '/home/edit',
        component: EditHomes,
    },
];

export default Routes;