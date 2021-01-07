import React from 'react'
import Home from '../Home'
import Topic from '../Topic'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
export function App (){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/topics/:topicTerm" component={Topic} />
        <Route path="/">
          <Home topicTerm="react" />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App