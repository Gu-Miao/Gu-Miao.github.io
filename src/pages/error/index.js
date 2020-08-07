import React from 'react'
import '@pages/Error/error.less'

const Error = () => {
  return (
    <div id="error">
      <h1>Some went wrong!</h1>
      <h2>The page you visit is not exist. Please change url and try again.</h2>
      <h3>error code: 404</h3>
    </div>
  )
}

export default Error
