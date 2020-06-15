import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/Home'
import Error from '@pages/Error'
import Detail from '@pages/Detail'
import '@/style.less'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} exact />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App
