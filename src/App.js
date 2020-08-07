import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/home'
import Loading from '@components/Loading'
import '@/style.less'

const About = lazy(() => import('@pages/about'))
const Error = lazy(() => import('@pages/error'))

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route component={Error} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
