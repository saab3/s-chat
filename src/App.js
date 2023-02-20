import { useState } from 'react'
import Cookies from 'universal-cookie'
import './App.css'
import Auth from './components/auth'
import Chatroom from './components/chatroom'

const cookies = new Cookies()


function App() {  
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  return (
    <div className="App">
      {/* <div style={{width:"80%"}} className="flex flex-row justify-center items-center"> */}
      {!isAuth ? <Auth setIsAuth={setIsAuth} /> : <Chatroom />}
      {/* </div> */}
    </div>
  )
}

export default App
