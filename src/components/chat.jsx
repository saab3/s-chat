import React , {useState , useEffect} from 'react'
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore'
import { auth, db } from '../firebaseConfig'
import { Bubble } from './bubble'
import Cookies from 'universal-cookie'
import ScrollableFeed from 'react-scrollable-feed'


function Chat({room}) {
  const [messages, setMessages] = useState([])
  const messagesRef = collection(db, 'messages')
  
  const cookie = new Cookies()
  const currentUser = cookie.get('displayName')
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.getElementById("scroller").scrollHeight,
      behavior: 'smooth',
    });
  };
  useEffect(()=>{
    const queryMessages = query(messagesRef, where("room","==",room))
    onSnapshot(queryMessages, (snapshot)=>{
      let messages = []
      snapshot.forEach(doc => {
        messages.push({...doc.data() , id : doc.id})
      })
      messages.sort((a,b) => a.createdAt - b.createdAt)
      // let lastMessage = document.getElementById(messages[messages.length-1].id)
      // lastMessage?.scrollIntoView();
      setMessages(messages)
    })
  },[])
  return (
    <div style={{paddingBottom:"2rem" , width:"80%", height:"88vh"}} id ="scroller">
      <ScrollableFeed>
    {messages.map(message => <Bubble start={message.user !== currentUser} text={message.text} user={message.user} id={message.id} key={message.id}/>)}
    </ScrollableFeed>
    <div id="anchor"></div>
    </div>
  )
}

export default Chat