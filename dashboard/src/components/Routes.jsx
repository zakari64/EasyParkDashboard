import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Operations from '../pages/Operations'
import Stats from '../pages/Stats'
import Form from '../pages/Form'

const Routes = () => {
    return (
        <Switch>
            <Route path='/layout/dashboard' component={Dashboard}/>
            <Route path='/layout/operations' component={Operations} />
            <Route path='/layout/stats' component={Stats}/>
            <Route path='/layout/form' component={Form} />
        </Switch>
    )
}

export default Routes
