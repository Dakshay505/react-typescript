
interface Props {
    name :string,
    numType?:number,
    boolType:boolean
}

const Greet = (props:Props) => {

    
  const {numType = 0} = props;

  return (<>
    { props.boolType ==true ?
    <div>Greeting {props.name}
    <p>This number {numType} is true</p>
    </div>
    :<div>
    greeting unknown
    </div>
}</>
  )
}

export default Greet