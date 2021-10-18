import './App.css';
const text = 'Произвольный текст для первого задания'

const Message = (props) => {
  return (
    <div className="App">    
       <h3>Текст из константы: {props.text}!</h3>
    </div>
  )
}

function App() {
 return (
   <Message
   text={text}
   ></Message>
 );
}

export default App;

