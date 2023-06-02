type Props = {
   children:React.ReactNode
}


const Person = (props:Props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Person