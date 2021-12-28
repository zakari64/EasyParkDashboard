import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Operations from '../pages/Operations'
import Form from '../pages/Form'

const Routes = () => {
    return (
        <Switch>
            <Route path='/layout/dashboard' component={Dashboard}/>
            <Route path='/layout/customers' component={Customers}/>
            <Route path='/layout/operations' component={Operations} />
            <Route path='/layout/form' component={Form} />
        </Switch>
    )
}

export default Routes
