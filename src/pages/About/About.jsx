import React from 'react'
import { githubURL, issuesURL, wikiURL, licenseURL } from '@common/project.json'
import '@pages/About/about.less'

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <p className="des">
        This is a static webpage of my own powered by <pre>React</pre> and <pre>GitPage</pre>.
      </p>
      <ul>
        <li>
          if you like it, give me a{' '}
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            star
          </a>
          .
        </li>
        <li>
          if you have a word to me, submit a{' '}
          <a href={issuesURL} target="_blank" rel="noopener noreferrer">
            issue
          </a>
          .
        </li>
        <li>
          if you want to get a similar site, read{' '}
          <a href={wikiURL} target="_blank" rel="noopener noreferrer">
            this
          </a>
          .
        </li>
      </ul>
      <div className="copyright">
        Copyright © 2020 GuTianhuang{' '}
        <a href={licenseURL} target="_blank" rel="noopener noreferrer">
          MIT
        </a>
      </div>
    </div>
  )
}

export default About
