import { postRequest } from '@/lib/request'
import * as apis from '@/contants/apis'

export const getUser = (data: any) => {
  return Promise.resolve({ success: true, data: { name: 'jude' }, fake: data })
}

export const getUserByRealRequest = (data: any) => {
  return postRequest(apis.getUser, data)
}
