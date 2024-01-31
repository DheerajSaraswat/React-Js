import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom' 
import { useSelector } from 'react-redux'

function AuthLayout({children, authentication = true}) {
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.status)
    const navigate = useNavigate()
    
    useEffect( ()=>{
      console.log(`authStatus: ${authStatus}`);
      if (authentication && authStatus !== authentication) {
          navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
          navigate("/");
        }
        setLoader(false);
      } ,[authStatus, authentication, navigate])
      console.log(loader);

  return (loader ?  <h1>Loading...</h1> : <>{children}</> )  
}
export default AuthLayout