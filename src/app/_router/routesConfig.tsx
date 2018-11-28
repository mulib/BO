import { MainLayout } from '../_master/AuthLayouts/MainLayout/components/MainLayout'
import { MainPublicLayout } from '../_master/PublicLayouts/MainPublicLayout/components/MainPublicLayout'
import { Login } from '../Login/components/Login'
import { Register } from '../Register/components/Register'
import { Users } from '../Users/components/Users'
import { AddUser } from '../Users/components/AddUser'
import { Error404 } from '../_errors/components/Error404'

interface RouteMap {
    [key: string]: any
}

export interface RouteConfig {
    path: string,
    component: any,
    routes?: RouteConfig[]
}

const routesConfig: RouteConfig[] = [
    {
        path: '/guest',
        component: MainPublicLayout,
        routes: [{
            path: '/guest/login',
            component: Login
        },
        {
            path: '/guest/register',
            component: Register
        }
        ]
    },
    {
        path: '/auth',
        component: MainLayout,
        routes: [{
            path: '/auth/users',
            component: Login
        },
        {
            path: '/auth/add-user',
            component: AddUser
        }
        ]
    }
]

export default routesConfig
