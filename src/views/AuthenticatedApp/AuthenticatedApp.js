import React, { useContext } from 'react'
import MainTemplate from 'components/templates/MainTemplate'
import Dashboard from 'components/organisms/Dashboard/Dashboard'
import { Route, Switch } from 'react-router-dom'
import Form from 'components/organisms/Form/Form'
import NotesViewer from 'components/organisms/NotesViewer/NotesViewer'
import { NotesContext } from 'providers/AppProviders'

const AuthenticatedApp = () => {
  const { notes, handleAddNotes, formValues, handleInputChange } = useContext(NotesContext)

  return (
    <MainTemplate>
      {/* <Dashboard /> */}
      <Switch>
        <Route path="/form">
          <Form handleAddNotes={handleAddNotes} formValues={formValues} handleInputChange={handleInputChange} />
        </Route>

        <Route path="/viewer">
          <NotesViewer data={notes} />
        </Route>
      </Switch>
    </MainTemplate>
  )
}

export default AuthenticatedApp
