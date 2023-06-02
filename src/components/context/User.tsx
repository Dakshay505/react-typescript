import {useContext} from 'react'
import {UserContext} from "./User.Context"


const User = () => {
 const userContext = useContext(UserContext);
  return (
    <div>
        <button onClick={()=>userContext.setUser({name:"Dakshay",email:"dakshaybishnoi@gmail.com"})}>Login</button>
        <button onClick={()=>userContext.setUser(null)}>Logout</button>
         {
            userContext.user ?
        <div>
            The user is {userContext?.user?.name}
            Email aaddress {userContext?.user?.email}
        </div> 
        :<div>
           You are logged out
        </div>
         }
    </div>
  )
}

export default User