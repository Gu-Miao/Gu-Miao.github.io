import React from 'react'
import useTitle from '@hooks/useTitle'
import logo from '@assets/images/logo.png'
import '@layout/layout.less'

const Layout = ({ children, id, title }) => {
  useTitle(title)
  return (
    <div id="layout">
      <hr />
      <nav>
        <img src={logo} alt="logo" draggable="false" />
        <ul>
          {/* <li>Articles</li> */}
          <li>About</li>
        </ul>
      </nav>
      <main id={id}>{children}</main>
    </div>
  )
}

export default Layout
