import React, { useContext } from 'react'
import Form from 'components/organisms/Form/Form'
import NotesViewer from 'components/organisms/NotesViewer/NotesViewer'
import { Wrapper } from 'components/organisms/Dashboard/Dashboard.styles'
import { NotesContext } from 'providers/AppProviders'

const Dashboard = () => {
  const { notes, handleAddNotes, formValues, handleInputChange } = useContext(NotesContext)

  return (
    <Wrapper>
      <Form handleAddNotes={handleAddNotes} formValues={formValues} handleInputChange={handleInputChange} />
      <NotesViewer data={notes} />
    </Wrapper>
  )
}

export default Dashboard
