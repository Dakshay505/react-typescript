import React from 'react'

type InputProp =React.ComponentProps<'input'>

const Input = (props:InputProp) => {
  return (
    <input {...props} />
  )
}

export default Input