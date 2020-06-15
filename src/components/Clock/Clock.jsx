import React, { useState, useEffect } from 'react'
import day from 'dayjs'
import '@components/Clock/clock.less'

const Clock = () => {
  const [timer, setTimer] = useState(day().format('YYYY年M月D日 H:m:s'))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(day().format('YYYY年M月D日 H:m:s'))
    })
    return () => clearInterval(timer)
  }, [])
  return <div className="clock">{timer}</div>
}

export default Clock
