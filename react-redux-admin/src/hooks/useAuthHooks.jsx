
import React from 'react'
import { useSelector } from 'react-redux'

const useAuthHooks = () => {
  const {user}  = useSelector(state => state.auth)
  return {user}
}

export default useAuthHooks