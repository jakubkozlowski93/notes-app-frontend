import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useError } from 'hooks/useError'

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loginName, setLoginName] = useState(null)
  const { dispatchError } = useError()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await axios.get('https://notepad-application.herokuapp.com//api/main', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          setUser(response.data)
          console.log(response.data)
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [])

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('https://notepad-application.herokuapp.com/api/login', {
        login,
        password,
      })
      setUser(response.data.token)
      localStorage.setItem('token', response.data.token)
      setLoginName(response.data.payload.login)
      localStorage.setItem('login', response.data.payload.login)
    } catch (err) {
      dispatchError(`Invalid login or password`)
    }
  }

  const signOut = () => {
    localStorage.removeItem('token')
    setUser(null)
    localStorage.removeItem('login')
    setLoginName(null)
  }

  return <AuthContext.Provider value={{ user, signIn, signOut, loginName }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
