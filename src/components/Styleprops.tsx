import React from "react";

type Props ={
    styles : React.CSSProperties,
}

const Styleprops = (props:Props) => {
  return (
    <div>
        <h1 style={props.styles}>Hey there </h1>
    </div>
  )
}

export default Styleprops