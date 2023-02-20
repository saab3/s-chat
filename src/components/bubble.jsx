export function Bubble ({
  text, user , start, id
}){
      return (
        <div className={`chat ${start? "chat-start" : "chat-end"}`} id={id}>
          <div className="chat-header">
          {user}
          </div>
          <div className="chat-bubble">{text}</div>
        </div>
      )
    }