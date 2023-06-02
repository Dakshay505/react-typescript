import React,{createContext,useState} from "react";

type authUser= {
    name:string,
    email:string
}
type Value ={
    user:authUser |null,
    setUser :React.Dispatch<React.SetStateAction<authUser | null>>
}

type ChildrenType ={
    children :React.ReactNode
}

export const UserContext = createContext({} as Value);

const UserProvider = ({children}:ChildrenType)=>{
    const [user,setUser] = useState<authUser | null>(null);

    return(
    <UserContext.Provider value = {{user,setUser}} >
        {children}
    </UserContext.Provider>
    )
}
export default UserProvider;