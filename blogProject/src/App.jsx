import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components/index'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect( ()=>{
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .catch((err) => alert("Data Loading error..."))
      .finally(() => setLoading(false));
  }, [])

  return !loading ? (
    <div>
      <Header />
      <Footer />
    </div>
  ) : null;
}

export default App
