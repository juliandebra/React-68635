import { useState } from 'react'

export const useCount = (initialCount = 0, min, max) => {
  if (initialCount < min || initialCount > max) initialCount = min

  const [count, setCount] = useState(initialCount)

  const restar = () => {
    if (count > min) setCount(prev => prev - 1)
  }
  const sumar = () => {
    if (count < max) setCount(count + 1)
  }
  const reset = () => {
    setCount(initialCount)
  }

  return { count, restar, sumar, reset }
}
