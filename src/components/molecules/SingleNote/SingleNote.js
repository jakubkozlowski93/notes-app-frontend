import React from 'react'
import { Wrapper, NotesTitle, ContentWrapper, TitleWprapper } from 'components/molecules/SingleNote/SingleNote.styles'
import { Button } from 'components/atoms/Button/Button'
import PropTypes from 'prop-types'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'

const SingleNote = ({ userData: { title, content }, deleteNote }) => {
  return (
    <Wrapper>
      <TitleWprapper>
        <NotesTitle>{title}</NotesTitle>
        <DeleteButton onClick={() => deleteNote(title)} />
      </TitleWprapper>

      <ContentWrapper>
        {content}
        <Button>Read more</Button>
      </ContentWrapper>
    </Wrapper>
  )
}

SingleNote.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default SingleNote
