import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/home'
import AsyncComponent from '@components/AsyncComponent'
import '@/style.less'

const About = AsyncComponent('about')
const Error = AsyncComponent('error')

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App
