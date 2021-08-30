import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewUserContainer from '../pages/NewUserContainer'

const App =() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/newuser" component={NewUserContainer} />
        </Switch>
    </BrowserRouter>
)

export default App