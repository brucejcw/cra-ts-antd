import { createContextProviderAndHook } from '@/lib/createContextProviderAndHook'

const { CustomContextProvider, useCustomContext } = createContextProviderAndHook({
  initialState: {
    user: {},
  },
  reducers: {
    addUser({ payload, state }: any) {
      return {
        ...state,
        user: payload.user,
      }
    },
  },
})

export { CustomContextProvider as UserCtxProvider, useCustomContext as useUserContext }
