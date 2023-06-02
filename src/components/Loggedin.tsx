
import {useState} from 'react'


type authUser ={
    name:string,
    email:string
}

const Loggedin = () => {

    const [isLogin,setIsLogin] = useState<authUser |null>({} as authUser);

    function handlelogin(){
         setIsLogin({
            name:"Dakshay",
            email:"dakshaybishnoi@gmail.com"
         })
    }
    function handlelogout(){
         setIsLogin(null);
    }
  return (
    <div>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handlelogout}>Logout</button>
        <h1>{isLogin ? `You are Logged In ${isLogin.name} and your mail address is ${isLogin.email}` :"You are Logged Out"}</h1>
    </div>
  )
}

export default Loggedin