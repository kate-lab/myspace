import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import Rawr from './components/Rawr'

function App() {

  return (

    <div className="site-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Rawr />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  )

}

export default App
