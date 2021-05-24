import { useUserContext } from '@/context/UserContext'
import { useEffect } from 'react'
import useRequest from '@/lib/useRequest'
import { getUser } from '@/services/userService'

export default () => {
  const { dispatch, actions } = useUserContext()
  const { loading, data, error, run } = useRequest(getUser, {
    manual: true,
    onSuccess: result => {
      if (result.success) {
        dispatch({
          type: actions.addUser,
          payload: {
            user: result.data,
          },
        })
      }
    },
  })

  useEffect(() => {
    run({
      userId: '12345',
    })
  }, [])

  return {
    loading,
    data,
    error,
  }
}
