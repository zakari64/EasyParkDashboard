import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Stats from '../pages/Stats'

const Routes = () => {
    return (
        <Switch>
            <Route path='/layout/dashboard' component={Dashboard}/>
            <Route path='/layout/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
