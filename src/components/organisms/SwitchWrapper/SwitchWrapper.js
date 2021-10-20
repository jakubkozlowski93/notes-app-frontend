import React, { useContext } from 'react'
import { Wrapper } from 'components/organisms/SwitchWrapper/SwitchWrapper.styles'
import { Route, Switch, Redirect } from 'react-router-dom'
import Form from 'components/organisms/Form/Form'
import NotesViewer from 'components/organisms/NotesViewer/NotesViewer'
import { NotesContext } from 'providers/NotesProviders'
import NewsFeed from 'components/organisms/NewsFeed/NewsFeed'

const SwitchWrapper = () => {
  const { notes, handleAddNotes, formValues, handleInputChange } = useContext(NotesContext)

  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/viewer" />
        </Route>
        <Route path="/form">
          <Form handleAddNotes={handleAddNotes} formValues={formValues} handleInputChange={handleInputChange} />
        </Route>
        <Route path="/viewer">
          <NotesViewer data={notes} />
        </Route>
        <Route path="/news">
          <NewsFeed />
        </Route>
      </Switch>
    </Wrapper>
  )
}

export default SwitchWrapper
