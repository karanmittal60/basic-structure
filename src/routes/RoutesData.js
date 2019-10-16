import routeRules from "./RouteRules";
import loadable from '@loadable/component'

const routesData = [

    {
        path: routeRules.signIn,
        component: loadable(() => import('../container/signIn/SignIn')),
        auth: false
    },
    {
        path: routeRules.signUp,
        component: loadable(() => import('../container/signUp/SignUp')),
        auth: false
    },
    {
        path: routeRules.forgotPassword,
        component: loadable(() => import('../container/forgotPassword/ForgotPassword')),
        auth: false
    },
    {
        path: routeRules.resetPassword,
        component: loadable(() => import('../container/resetPassword/ResetPassword')),
        auth: false
    },
    {
        path: routeRules.dashboard,
        component: loadable(() => import('../container/dashboard/Dashboard')),
        auth: true
    },
    {
        path: routeRules.home,
        component: loadable(() => import('../container/pages/home/Home')),
        auth: true
    },
    {
        path: routeRules.aboutUs,
        component: loadable(() => import('../container/pages/about/About')),
        auth: true
    },
    {
        path: routeRules.contactUs,
        component: loadable(() => import('../container/pages/contact/Contact')),
        auth: true
    },
    {
        path: routeRules.projects,
        component: loadable(() => import('../container/pages/projects/Projects')),
        auth: true
    },
    {
        component: loadable(() => import('../components/notFound/index')),
        auth: false
    },

];

export default routesData;