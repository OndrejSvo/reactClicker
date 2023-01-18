import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

const App= ()=> {
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    document.title= `Clicked: ${cookies}`;
  });

  return (
    <>
    
    <p>Clicked: {cookies}</p>
    <button onClick={()=>setCookies(cookies+1)}>
      CLICK ME
      </button>

    </>
  );
}

export default App;
