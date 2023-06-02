
import {useContext} from "react"
import {ThemeContext} from "./ThemeContextProvider";

const Box = () => {
    const {primary,secondary} = useContext(ThemeContext);
    console.log({});
  return (<>
    <div
    style={{backgroundColor:secondary.main,color:secondary.text,height:"100px",width:"200px"}}
    >Box</div>
    <div
    style={{backgroundColor:primary.main,color:primary.text,height:"100px",width:"200px"}}
    >Box</div>
    </>
  )
}

export default Box