import { useContext } from "react"
import userContext from "../Context/UserContext"

function Profile() {
    const {user} = useContext(userContext)
  if(!user) return <>Please Login!</>
  return <>Welcome {user.username}, your password is {user.password}</>  
}
export default Profile