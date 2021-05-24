import axios from 'axios'
import { message } from 'antd'

const BASE_PATH = ''

interface Options {
  skipErrorMessage?: boolean
}

export interface ResponseError {
  code?: string
  message: string
}

export interface Response {
  success: boolean
  data?: any
  error?: ResponseError
}

const defaultOptions = {
  skipErrorMessage: false,
}

const client = axios.create({
  baseURL: BASE_PATH,
  withCredentials: true,
})

client.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  },
)

const showErrorMessage = (errorMessage: string) => {
  message.error(errorMessage)
}

const handleRes = (res: Response, options: Options) => {
  const { success, error } = res
  if (!success && !options.skipErrorMessage && error) {
    showErrorMessage(error.message)
  }
  return res
}

const handleUnexpectedError = (error: Error, options: Options): Response => {
  !options.skipErrorMessage && showErrorMessage(error.message || 'system error')
  return {
    success: false,
    error,
  }
}

export function buildRequest(options: Options) {
  console.log(options)
  // const { req } = options
  // if (req) {
  //   const headers = {}
  //   if (req.headers.cookie) {
  //     headers.cookie = req.headers.cookie
  //   }
  //   const protocol = process.env.NODE_ENV === 'development' ? 'https' : 'http'
  //   const baseURL = `${protocol}://localhost:${process.env.PORT}${BASE_PATH}`
  //   return axios.create({
  //     baseURL: baseURL,
  //     headers: headers,
  //     withCredentials: true,
  //   })
  // }
  return client
}

export async function getRequest(url: string, params?: any, options?: Options) {
  const _options = { ...options, ...defaultOptions }
  return buildRequest(_options)
    .get(url, params)
    .then(response => {
      return response.data
    })
    .then(res => {
      return handleRes(res, _options)
    })
    .catch(e => handleUnexpectedError(e, _options))
}

export async function postRequest(url: string, params?: any, options?: Options) {
  const _options = { ...options, ...defaultOptions }
  return buildRequest(_options)
    .post(url, params)
    .then(response => {
      return response.data
    })
    .then(res => {
      return handleRes(res, _options)
    })
    .catch(e => handleUnexpectedError(e, _options))
}
