import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Operations from '../pages/Operations'

const Routes = () => {
    return (
        <Switch>
            <Route path='/layout/dashboard' component={Dashboard}/>
            <Route path='/layout/customers' component={Customers}/>
            <Route path='/layout/operations' component={Operations} />
        </Switch>
    )
}

export default Routes
