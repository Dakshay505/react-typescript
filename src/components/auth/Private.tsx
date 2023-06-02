import React from "react"
import Login from "./Login"
import {profileProp} from "./Profile"

type PrivateProps ={
    isLoggedIn:boolean,
    component :React.ComponentType<profileProp>

}

const Private = ({isLoggedIn , component :Component}:PrivateProps) => {
  return (
    <div>
        {
            isLoggedIn ? 
            <Component name ={"Dakshay"}/> 
            :
            <Login/>
        }
    </div>
  )
}

export default Private