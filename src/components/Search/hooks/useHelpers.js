import { useState, useCallback } from 'react'

import { getSubject } from '../api'

export const useHelpers = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const { name, title } = await getSubject(value)

      setResult({
        title,
        name
      })
    },
    [value, setResult]
  )

  return { value, result, handleChange, handleSubmit }
}