import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '@/pages/About'
import Users from '@/pages/Users'
import Dashboard from '@/pages/Dashboard'

const routes = [
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/',
    component: Dashboard,
  },
]

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default () => {
  return (
    <>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  )
}
