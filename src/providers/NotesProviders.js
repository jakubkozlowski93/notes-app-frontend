import React, { useState, useEffect } from 'react'
import { notes as data } from 'data/data'
import { v4 as uuid } from 'uuid'

export const NotesContext = React.createContext({
  notes: [],
  formValues: [],
  isLoading: Boolean,
  handleInputChange: () => {},
  handleAddNotes: () => {},
  handleDeleteNote: () => {},
})

const initialFormState = {
  id: '',
  title: '',
  content: '',
}

const NotesProviders = ({ children }) => {
  const mockAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...data])
        reject({ messege: 'Opps. There are no notes...' })
      }, 1000)
    })
  }

  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [formValues, setFormValues] = useState([])

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddNotes = (e) => {
    e.preventDefault()
    if (formValues.title && formValues.content) {
      const newNote = {
        id: uuid(),
        title: formValues.title,
        content: formValues.content,
      }
      setNotes([newNote, ...notes])
      setFormValues(initialFormState)
    }
  }

  useEffect(() => {
    mockAPI().then((res) => {
      setLoading(false)
      setNotes(res)
    })
  }, [])

  const handleDeleteNote = (title) => {
    const filteredNotes = notes.filter((note) => note.title !== title)
    setNotes(filteredNotes)
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        formValues,
        isLoading,
        handleInputChange,
        handleAddNotes,
        handleDeleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export default NotesProviders
