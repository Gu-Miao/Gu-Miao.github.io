import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { githubURL, blogURL, username, phone, email } from '@common/project.json'
import photo from '@assets/images/avatar.png'
import '@pages/Home/home.less'

const Home = () => {
  const [showWelcome, setshowWelcome] = useState(true)
  const [renderWelcome, setRenderWelcome] = useState(true)
  useEffect(() => {}, [])
  const welcomeClass = classnames({ fade: !showWelcome })
  const hndleAnmtionEnd = () => {
    setshowWelcome(false)
  }
  const handleWelcomeFade = () => {
    setRenderWelcome(false)
  }
  return (
    <div id="home">
      {renderWelcome && (
        <div id="welcome" className={welcomeClass} onTransitionEnd={handleWelcomeFade}>
          <h1 className="welcome" onAnimationEnd={hndleAnmtionEnd}>
            Welcome to my Home.
          </h1>
        </div>
      )}
      <div className="content">
        <div className="summary">
          <p>A front-end developer, a doer of open source technology, a heavy react user.</p>
          <ul>
            <h1>My Skills Stack</h1>
            <li>CSS3/LESS/SCSS</li>
            <li>JavaScript/ES6+</li>
            <li>Jquery/Boostrp/LayUI</li>
            <li>React family</li>
          </ul>
          <div className="links">
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <a href={blogURL} target="_blank" rel="noopener noreferrer">
              BLOG
            </a>
            <Link to="/about">ABOUT</Link>
          </div>
        </div>
        <div className="me">
          <img src={photo} alt="@GuTinhuang" />
          <p>{username}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
