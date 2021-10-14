import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useError } from 'hooks/useError'

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(null)
  const { dispatchError } = useError()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/main', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          setUser(response.data)
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [])

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        login,
        password,
      })
      setUser(response.data.token)
      localStorage.setItem('token', response.data.token)
      setLogin(response.data.payload.login)
    } catch (err) {
      console.log(err)
      dispatchError(`Invalid login or password`)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ user, signIn, signOut, login }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
