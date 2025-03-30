import { useEffect, useRef, useState } from 'react'

const INITIAL_TIME = 0

export const useGameTime = (isRunning: boolean) => {
  const [time, setTime] = useState(INITIAL_TIME)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => (prev >= 0 ? prev + 1 : 0))
      }, 1000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning])

  const resetTime = () => {
    setTime(INITIAL_TIME)
  }

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const isTimeUp = () => time === 0

  return {
    time,
    formattedTime: formatTime(time),
    resetTime,
    stopTimer,
    isTimeUp,
  }
}