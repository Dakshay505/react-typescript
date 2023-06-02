
export type profileProp ={
    name:string
}

const Profile = ({name}:profileProp) => {
  return (
    <div>
        welcome back ,{name}
    </div>
  )
}

export default Profile