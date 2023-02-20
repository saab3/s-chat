import React , {useState , useEffect} from 'react'
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore'
import { auth, db } from '../firebaseConfig'
import Chat from './chat'


function Chatroom() {
  const [input   , setInput  ] = useState('')
  const [message , setMessage] = useState('')
  const [room    , setRoom   ] = useState(null)
  
  const messagesRef = collection(db, 'messages')
  
  async function sendMessage(message){
    if(message !== ''){
      try{
        await addDoc(messagesRef, {
          text: message,
          createdAt : serverTimestamp(),
          user: auth.currentUser.displayName,
          room: room
        })
        setMessage('')
      }catch(err){
        console.log(err)
      }
    }
  }

  return (
    <>
    {room ? (
      <>
        {/* <h1 style={{height:"8%"}}>Chatroom : {room}</h1> */}
        <Chat room = {room} />
        <div style={{display      : "flex",
                     justifyContent:"center",
                     alignItems   : "center", 
                     height       : "12vh" ,
                     paddingInline: "5rem",
                     background   : "#eeeeee",
                     gap          : ".5rem",
                     width        : "100%" , 
                    //  position     : "fixed", 
                     bottom       : "0px",
                     left         : "0px"}}>
        <input type="text" 
               onChange={(e)=>setMessage(e.target.value)} 
               style={{borderRadius  : "1rem",
                       width         : "100%",
                       border        : "1px solid darkgray",
                       paddingInline : "1rem",
                       fontSize      : "22px",
                       color         : "rgb(72, 72, 72)",
                       height        : "8vh",
                      }} 
               value={message}/>
        <button onClick={()=>sendMessage(message)} 
                style={{width:"3.5rem",
                        height:"3.5rem",
                        border:"1px solid darkgray",
                        borderRadius:"3rem",}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23ZM5.44 12h5.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        </div>
      </>
    ) 
    : 
    (<div style={{display:"flex",gap:"2rem",justifySelf:"center"}} >
      <input type="text" 
             onChange={(e)=>setInput(e.target.value)} 
             value = {input}
             className="px-4 py-3"/>
      <button onClick={()=>{setRoom(input)}}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enter
      </button>
    </div>)}
    </>
  )
}

export default Chatroom