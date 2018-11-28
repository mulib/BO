import { Route } from 'react-router-dom'
import { RouteConfig } from './routesConfig'
import * as React from 'react'
export interface RouteWithSubRoutesProps{
  routes:Array<any>
}

const renderRoutes = (routes:any):any=>{
  if (Array.isArray(routes)){
    return routes.map((route: any) => {
      if (route.routes) {
        return renderRoutes(route.routes)
      }
      return (
        <Route path={route.path} render={route.component} />
      )
    })
  }else{
    return (
      <Route path={routes.path} render={routes.component} />
    )
  }

}

export function RouteWithSubRoutes(props: RouteWithSubRoutesProps):any {
  return(renderRoutes(props.routes))
} 
