import React, { useContext } from 'react'
import { Wrapper } from './NotesViewer.styles'
import SingleNote from 'components/molecules/SingleNote/SingleNote'
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo'
import { Title } from 'components/atoms/Title/Title'
import { NotesContext } from 'providers/NotesProviders'

const NotesViewer = ({ data }) => {
  const { handleDeleteNote, isLoading } = useContext(NotesContext)

  return (
    <Wrapper>
      {isLoading ? (
        <StatusInfo>Is loading...</StatusInfo>
      ) : (
        data.map((notes) => <SingleNote deleteNote={handleDeleteNote} key={notes.id} userData={notes} />)
      )}
    </Wrapper>
  )
}

export default NotesViewer
