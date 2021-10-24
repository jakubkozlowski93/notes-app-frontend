import React, { useState } from 'react'
import FormField from 'components/molecules/FormField/FormField'
import { Wrapper, RadioWrapper } from 'components/organisms/Form/Form.styles'
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
      <RadioWrapper>
        <label htmlFor="r1">
          <input id="r1" type="radio" name="radio" value="Home" onChange={handleInputChange} />
          Home
        </label>

        <label htmlFor="r2">
          <input id="r2" type="radio" name="radio" value="School" onChange={handleInputChange} />
          School
        </label>

        <label htmlFor="r3">
          <input id="r3" type="radio" name="radio" value="Work" onChange={handleInputChange} />
          Work
        </label>
      </RadioWrapper>

      <Button type="submit">Add new</Button>
    </Wrapper>
  )
}

export default Form
