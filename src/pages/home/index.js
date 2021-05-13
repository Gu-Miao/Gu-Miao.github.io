import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { githubURL, blogURL, username, phone, email } from '@common/project.json'
import useTitle from '@hooks/useTitle'
import photo from '@assets/images/avatar.png'
import './style.less'

let timer = null

const Home = () => {
  useTitle('GuTianhuang')

  const welcomed = useMemo(() => sessionStorage.getItem('welcomed') === 'true', [])

  const [showWelcome, setshowWelcome] = useState(!welcomed)
  const [renderWelcome, setRenderWelcome] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const welcomeClass = classnames({ fade: !showWelcome })
  const contentClass = classnames({ content: true, show: showContent })

  useEffect(() => {
    welcomed && handleWelcomeFade()
    return () => timer && clearTimeout(timer)
  }, [welcomed])

  const handleAnmtionEnd = () => {
    setshowWelcome(false)
    sessionStorage.setItem('welcomed', 'true')
  }
  const handleWelcomeFade = () => {
    timer = setTimeout(() => {
      setRenderWelcome(false)
      setShowContent(true)
    }, 0.3 * 1000)
  }

  return (
    <div id="home">
      {renderWelcome && (
        <div id="welcome" className={welcomeClass} onTransitionEnd={handleWelcomeFade}>
          <h1 className="welcome" onAnimationEnd={handleAnmtionEnd}>
            Welcome to my Home.
          </h1>
        </div>
      )}
      <div className={contentClass}>
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
          <img src={photo} alt="@GuTinhuang" draggable="false" />
          <p>{username}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
