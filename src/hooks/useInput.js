import { useState } from 'react'

export const useInput = (initialValue = '', type) => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => setValue(event.target.value)

  return { value, onChange, type }
}
