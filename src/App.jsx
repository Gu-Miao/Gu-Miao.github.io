import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/Home'
import Error from '@pages/Error'

import '@/style.less'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App
