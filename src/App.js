import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import ThemeSelector from './layouts/theme/ThemeSelector';


import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState("What is my peak power generated?");
  const [answer, setAnswer] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingIndex, setTypingIndex] = useState(0);


  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingIndex(prevIndex => prevIndex + 1);
      setCursorVisible(prev => !prev); // Toggle cursor visibility
    }, 5); // Typing speed, adjust as needed
    
    return () => clearInterval(typingInterval);
  }, []);



  const handleSubmit = () => {
    setAnswer("")
    axios.post('http://127.0.0.1:5001/ask', { question: value })
      .then(response => {
        console.log(response.data); // Handle response data
        setAnswer(response.data?.answer || "");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      {/* <ThemeSelector /> */}
      <div>
        <iframe src="" width="100%" height="600" />
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}className='textbox'>
          <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={2} cols={100} style={{color:"black"}}/>
          <div style={{ marginTop: '10px' }}>
            <Button label="Submit" onClick={handleSubmit}/>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <InputTextarea autoResize value={answer}  rows={10} cols={100} readOnly style={{}} />
        </div>
      </div>
    </div>
  );
}

export default App;
