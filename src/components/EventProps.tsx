import React from "react"

type Props ={
    buttonhandler:(event :React.MouseEvent<HTMLButtonElement>)=> void
}

const EventProps = (props:Props) => {
  return (
    <div>
        <button onClick={props.buttonhandler}>Click me</button>
    </div>
  )
}

export default EventProps