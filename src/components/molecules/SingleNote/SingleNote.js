import React from 'react'
import { Wrapper, NotesTitle, ContentWrapper, TitleWprapper, Header, Category } from 'components/molecules/SingleNote/SingleNote.styles'
import PropTypes from 'prop-types'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'

const SingleNote = ({ userData: { title, content, category }, deleteNote }) => {
  return (
    <Wrapper>
      <Header>
        <TitleWprapper>
          <NotesTitle>{title}</NotesTitle>
          <Category value={category}>{category}</Category>
        </TitleWprapper>
        <DeleteButton onClick={() => deleteNote(title)} />
      </Header>

      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  )
}

SingleNote.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default SingleNote
