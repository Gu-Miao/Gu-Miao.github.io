import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/Home'
import Loading from '@components/Loading'
import '@/style.less'

const About = lazy(() => import('@pages/About'))
const Error = lazy(() => import('@pages/Error'))

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
