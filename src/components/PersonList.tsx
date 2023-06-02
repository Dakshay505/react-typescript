
type ChildrenProps ={
    children:string
}

const PersonList = (props:ChildrenProps) => {
  return (
    <>
       <div>
        {props.children}
       </div>
    </>
  )
    
}

export default PersonList