import React, { useState } from 'react'
import FormField from 'components/molecules/FormField/FormField'
import { Wrapper } from 'components/organisms/Form/Form.styles'
import { Title } from 'components/atoms/Title/Title'
import { Button } from 'components/atoms/Button/Button'
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo'

const Form = ({ handleInputChange, handleAddNotes, formValues }) => {
  const [inputLength, setInputLength] = useState(30)
  const [textAreaLength, setTextAreaLength] = useState(250)

  const handleInputLength = (e) => {
    let counter = e.target.value.length
    setInputLength(30 - counter)
  }

  const handleTextAreaLength = (e) => {
    let counter = e.target.value.length
    setTextAreaLength(300 - counter)
  }

  return (
    <Wrapper as="form" onSubmit={handleAddNotes}>
      <Title>Add notes</Title>
      <FormField
        label="Title"
        id="title"
        name="title"
        maxLength={30}
        value={formValues.title || ''}
        onChange={handleInputChange}
        handleInputLength={handleInputLength}
      />
      <StatusInfo>Pozostało znaków: {inputLength}</StatusInfo>
      <FormField
        isTextArea
        label="Content"
        id="content"
        name="content"
        maxLength={300}
        value={formValues.content}
        onChange={handleInputChange}
        handleTextAreaLength={handleTextAreaLength}
      />
      <StatusInfo>Pozostało znaków: {textAreaLength}</StatusInfo>
      <Button type="submit">Add new</Button>
    </Wrapper>
  )
}

export default Form
