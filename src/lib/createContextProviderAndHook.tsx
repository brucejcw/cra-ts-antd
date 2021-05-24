import React, { useContext, useReducer } from 'react'

export const createContextProviderAndHook = ({ initialState, reducers }: any) => {
  const actions: any = Object.keys(reducers).reduce((acc, actionName) => {
    return { ...acc, [actionName]: actionName }
  }, {})

  const Context = React.createContext([initialState, () => {}])

  const handleReducer = (state: any, { type, payload }: any) => {
    const action = reducers[type]
    if (typeof action !== 'function') {
      throw new Error(`Invalid action type: ${type}`)
    }
    return action({ state, payload })
  }

  const CustomContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(handleReducer, initialState)
    return <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>
  }

  const useCustomContext = () => {
    const [state, dispatch] = useContext(Context)
    return {
      state,
      dispatch,
      actions,
    }
  }

  return {
    CustomContextProvider,
    useCustomContext,
  }
}
