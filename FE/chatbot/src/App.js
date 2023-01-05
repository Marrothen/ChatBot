import logo from './logo.svg';
import './App.css';
import './style.css';
import img from './assets/send.svg'
import {handleSubmit} from './script.js'
function App() {
  return (
    <div >
      <div id="chat_container"></div>
      <form>
        <textarea name="prompt" rows="1" cols="1" placeholder="Chiedi"></textarea>
        <button onClick={(e)=>handleSubmit(e)}><img src={img} alt="send" /></button>
      </form>
    </div>
  );
}

export default App;
