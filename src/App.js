import { useState,useEffect } from 'react';


const App=() => {
  const [messageList, setMessageList] = useState([]);

  const [value,setValue] = useState('');

  const onChangeMessage = (event) => {
        setValue(event.target.value);
  };

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text,
    }
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }

  const resetValue = () => {
    setValue('');
  }

  useEffect(() => {
     if (messageList.length === 0) {
       return
     };

     const lastEl = messageList[messageList.length-1];

     if(lastEl.author === 'bot') {
       return
     };

     const timerId = setTimeout(() => {
      sendMessage ('bot', 'Hi!');
     }, 1500);
     return () => {
       clearTimeout(timerId)
      };
     
  }, [messageList])
 
  const onSubmit = (event) => {
      event.preventDefault();
      sendMessage('user', value);
      resetValue();
  }

 return (
   <div>
     <h1>Homework 2</h1>
     <ul>
     {messageList.map((item) => (<li>
       {item.author} : {item.text}
       </li>))}
     </ul>
     
     <form onSubmit={onSubmit}>
       <input value={value} type='text' onChange={onChangeMessage} />
       <button type='submit'>Send</button>
     </form>
   </div>
 )
}

export default App;

