import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewUserContainer from '../pages/NewUserContainer'
import PostPageContainer from '../pages/PostPageContainer'

const App =() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/newuser" component={NewUserContainer} />
            <Route exact path="/post" component={PostPageContainer} />
        </Switch>
    </BrowserRouter>
)

export default App