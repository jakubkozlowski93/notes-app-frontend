import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useError } from 'hooks/useError'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { dispatchError } = useError()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await axios.get('http://192.168.0.115:8080/api/main', {
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
      const response = await axios.post('http://192.168.0.115:8080/api/login', {
        login,
        password,
      })
      setUser(response.data.token)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('login', response.data.payload.login)
    } catch (err) {
      dispatchError(`Invalid login or password`)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('token', 'login')
  }

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
