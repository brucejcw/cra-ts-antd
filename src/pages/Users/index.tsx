import React from 'react'
import { useUserContext } from '@/context/UserContext'

export default () => {
  const {
    state: { user },
  } = useUserContext()
  return (
    <>
      <p>user information: </p>
      <p>
        <strong>name:</strong>
        {user.name}
      </p>
    </>
  )
}
