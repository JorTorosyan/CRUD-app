import Users from "../pages/users";
import Homes from "../pages/homes";

const Routes = [
    {
        path: '/',
        exact: true,
        component: Users,
    },
    {
        path: '/homes',
        component: Homes,
    },
];

export default Routes;