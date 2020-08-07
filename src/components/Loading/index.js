import React from 'react'
import './style.less'

const Loading = () => {
  return (
    <div className="c-loading">
      <svg
        className="spinner"
        width="30px"
        height="30px"
        viewBox="0 0 33 33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          cx="16.5"
          cy="16.5"
          r="15"
        ></circle>
      </svg>
    </div>
  )
}

export default Loading
