import { createContextProviderAndHook } from '@/lib/createContextProviderAndHook'

const { CustomContextProvider, useCustomContext } = createContextProviderAndHook({
  initialState: {
    token: new Date().toString(),
    showGlobalLoading: false,
  },
  reducers: {
    startLoading({ state }: any) {
      return {
        ...state,
        showGlobalLoading: true,
      }
    },
    stopLoading({ state }: any) {
      return {
        ...state,
        showGlobalLoading: false,
      }
    },
  },
})

export { CustomContextProvider as GlobalCtxProvider, useCustomContext as useGlobalContext }
