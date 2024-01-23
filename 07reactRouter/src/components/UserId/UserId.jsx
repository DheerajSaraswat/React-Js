import { useParams } from "react-router-dom"

function UserId() {
    const {userId} = useParams()
  return (
   
        <div className="py-11 px-4 bg-amber-500 text-center text-2xl font-extrabold text-white ">User ID: {userId}</div>
    
  )
}
export default UserId