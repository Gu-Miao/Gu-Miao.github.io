import React from 'react'
import Layout from '@layout'
import '@pages/Home/home.less'

const Home = () => {
  return (
    <Layout id="home" title="GuTianhuang's blog">
      <article>
        <h1>React Config</h1>
        <h4>
          use<code>react-app-rewired</code>.
          <br />
          <code>
            yarn add antd less yarn add less-loader babel-plugin-import react-app-rewired
            <br />
            customize-cra @babel/plugin-proposal-decorators -D
          </code>
        </h4>
      </article>
    </Layout>
  )
}

export default Home
