
type StatusProps ={
   status:"loading" | "error" | "success"
  }


const ConditionStatus = (props:StatusProps) => {
  let value :string = "";
  if(props.status==="success"){
    value = "Data fetch successfully"
  }else if(props.status === "loading"){
    value = "loading ..."
  }else if(props.status === "error"){
    value = "Error in getting Data ."
  }
  return (
    <h1>{value}</h1>
  )
}

export default ConditionStatus