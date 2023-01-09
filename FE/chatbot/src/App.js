import logo from './logo.svg';
import './App.css';
import './style.css';
import img from './assets/send.svg'
import {handleSubmit} from './script.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var userLang = navigator.language || navigator.userLanguage; 
  return (
    <div className='imageBackGround' >
    <div className='container '  >
      <div id="chat_container"  ></div>
      <div  className="textBottom ">
      <form className="mb-2 " >
        <textarea name="prompt" className='textarea' rows="1" cols="1" placeholder={userLang=="it"?"Chiedi...":"Ask..."}></textarea>
        <button onClick={(e)=>handleSubmit(e)}><img src={img} alt="send" /></button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default App;
