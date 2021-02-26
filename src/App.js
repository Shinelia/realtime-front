import React, {useEffect , useState} from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';

function App() { 

  const [color, setColor] = useState("yellow");
  const [socket, setSocket] = useState(null);
  document.body.style.backgroundColor = color;

   useEffect(() => {

    const socket = new socketIOClient('http://localhost:4000');
    setSocket(socket);

    // socket.emit('post scriptum', 123);

  //   socket.on('ping', (message) => {
  //     console.log(message);
  //   })

    socket.on('color received', (colorReceived) => {
      console.log(colorReceived);
      setColor(colorReceived);
    });
  }, []); 
  
   
    const changeColor = (color) => {
      setColor(color);
      socket.emit('change color', color);

}

    
  return (
    <div className="App">
      <h1>Essaye pour voir !</h1>
      <div>
          <button className="green" onClick={() => changeColor("green")}>Green</button>
          <button className="blue" onClick={() => changeColor("blue")}>Blue</button>
          <button className="red" onClick={() => changeColor("red")}>Red</button>
      </div>
    </div>
  );
  }


export default App;