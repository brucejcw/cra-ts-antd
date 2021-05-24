import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '@/context/GlobalContext'
import { ResponseError, Response } from './request'

interface Options {
  showGlobalLoading?: boolean
  manual?: boolean
  onSuccess?(res: Response, ...rest: any): void
  onError?(error: ResponseError): void
}

const defaultOptions = {
  showGlobalLoading: true,
  manual: false,
}

export default (func: Function, options?: Options) => {
  const { dispatch, actions } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState<ResponseError | null>(null)
  const funcRef = useRef(func)
  funcRef.current = func

  const _options = { ...defaultOptions, ...options }

  useEffect(() => {
    if (!_options.manual) {
      run()
    }
  }, [])

  const run = async (...args: any) => {
    if (_options.showGlobalLoading) {
      dispatch({
        type: actions.startLoading,
      })
    }
    setError(null)
    setLoading(true)

    try {
      const res = await funcRef.current(...args)
      const { success, error, data } = res
      if (success) {
        setData(data)
        if (options?.onSuccess) {
          options.onSuccess(res, ...args)
        }
      } else {
        setError(error)
        if (options?.onError) {
          options.onError(error)
        }
      }
    } catch (e) {
      setError(e)
      if (options?.onError) {
        options.onError(e)
      }
    } finally {
      if (_options.showGlobalLoading) {
        dispatch({
          type: actions.stopLoading,
        })
      }
      setLoading(false)
    }
  }

  return {
    loading,
    data,
    error,
    run,
  }
}
