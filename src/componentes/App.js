import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewUserContainer from '../pages/NewUserContainer'
import LoginUserContainer from '../pages/LoginUserContainer'

const App =() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/newuser" component={NewUserContainer} />
            <Route exact path="/login" component={LoginUserContainer} />
        </Switch>
    </BrowserRouter>
)

export default App