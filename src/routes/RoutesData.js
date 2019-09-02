import routeRules from "./RouteRules";
import loadable from '@loadable/component'

const routesData = [

    {
        path: routeRules.signIn,
        component: loadable(() => import('../container/signIn/SignIn'))
    },
    {
        path: routeRules.signUp,
        component: loadable(() => import('../container/signUp/SignUp'))
    },
    {
        path: routeRules.forgotPassword,
        component: loadable(() => import('../container/forgotPassword/ForgotPassword'))
    },
    {
        path: routeRules.resetPassword,
        component: loadable(() => import('../container/resetPassword/ResetPassword'))
    },
    {
        path: routeRules.dashboard,
        component: loadable(() => import('../container/dashboard/Dashboard'))
    },
    {
        component: loadable(() => import('../components/NotFound'))
    },

];

export default routesData;