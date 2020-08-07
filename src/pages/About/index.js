import React from 'react'
import { projectURL, issuesURL, spaGitPageURL, licenseURL } from '@common/project.json'
import useTitle from '@hooks/useTitle'
import './style.less'

const About = () => {
  useTitle('About')
  return (
    <div id="about">
      <h1>About</h1>
      <div className="box">
        <p className="des">
          This is a static webpage of my own powered by <strong>React</strong> and{' '}
          <strong>GitPage</strong>.
        </p>
        <ul>
          <li>
            if you like it, give me a{' '}
            <a href={projectURL} target="_blank" rel="noopener noreferrer">
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
            <a href={spaGitPageURL} target="_blank" rel="noopener noreferrer">
              this
            </a>
            .
          </li>
        </ul>
      </div>

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
