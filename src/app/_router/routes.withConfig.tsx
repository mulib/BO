// import { MainLayout } from '../_master/AuthLayouts/MainLayout/components/MainLayout'
// import { MainPublicLayout } from '../_master/PublicLayouts/MainPublicLayout/components/MainPublicLayout'
// import { Login } from '../Login/components/Login'
// import { Register } from '../Register/components/Register'
// import { Users } from '../Users/components/Users'
// import { AddUser } from '../Users/components/AddUser'
// import { Error404 } from '../_errors/components/Error404'
// const Config = require('Config')

// interface RouteMap {
//     [key: string]: any
// }

// export interface RouteConfig {
//     path: string,
//     component: any,
//     routes?: RouteConfig[]
// }

// const routeMap: RouteMap = {
//     'MainLayout': MainLayout,
//     'MainPublicLayout': MainPublicLayout,
//     'Login': Login,
//     'Register': Register,
//     'Users': Users,
//     'AddUser': AddUser,
//     'Error404': Error404
// }

// const routeConfig: RouteConfig[] = Config.routes

// const setComponents = (routeConfig: RouteConfig[]): any => {
//     return (routeConfig.forEach((route: RouteConfig) => {
//         route.component = routeMap[route.component]
//         if (route.routes) {
//             return setComponents(route.routes)
//         }
//     }))
// }

// const setComponentsByRouteMap = (routeConfig: any): any => {
//     if (Array.isArray(routeConfig)) {
//         for (let i: number = 0; i < routeConfig.length; i++) {
//             routeConfig = setComponentsByRouteMap(routeConfig[i])
//         }
//     } else {
//         routeConfig.component = routeMap[routeConfig.component]
//         console.info(routeConfig)
//         if(routeConfig.routes){
//             routeConfig = setComponentsByRouteMap(routeConfig.routes)
//         }
//     }
//     return routeConfig
// }

// const routes: any = setComponentsByRouteMap(routeConfig)
// export default routes