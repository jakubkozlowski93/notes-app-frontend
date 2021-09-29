import React from 'react'
import { Input } from 'components/atoms/Input/Input'
import { Label } from 'components/atoms/Label/Label'
import { Wrapper } from 'components/molecules/FormField/FormField.styles'

const FormField = React.forwardRef(
  ({ isTextArea, type, id, name, value, label, onChange, maxLength, handleInputLength, handleTextAreaLength, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextArea ? (
          <>
            <Input
              isTextArea
              as="textarea"
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              maxLength={maxLength}
              onKeyUp={handleTextAreaLength}
              {...props}
              ref={ref}
            />
          </>
        ) : (
          <>
            <Input
              autoComplete="off"
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              maxLength={maxLength}
              onKeyUp={handleInputLength}
              {...props}
              ref={ref}
            />
          </>
        )}
      </Wrapper>
    )
  }
)

export default FormField
