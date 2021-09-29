import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await axios.get('https://notes-application-v1.herokuapp.com/api/main', {
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
      const response = await axios.post('https://notes-application-v1.herokuapp.com/api/login', {
        login,
        password,
      })
      setUser(response.data.token)
      localStorage.setItem('token', response.data.token)
    } catch (err) {
      console.log(err)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
