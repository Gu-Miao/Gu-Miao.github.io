import React, { Component } from 'react'

function AsyncRouter(componentPath) {
  return class Content extends Component {
    state = {
      Component: null
    }
    componentDidMount() {
      if (this.state.Component) return
      const loader = () => import(`@pages/${componentPath}`)
      loader()
        .then(module => module.default)
        .then(Component => this.setState({ Component }))
        .catch(err => {
          throw new Error(err)
        })
    }
    render() {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : null
    }
  }
}

export default AsyncRouter
