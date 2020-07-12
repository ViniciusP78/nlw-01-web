import React from 'react'; // { useState }
import './App.css';

// JSX: Sintaxe de XML dentro do JavaScript

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

// function App() {
//   const [counter, setCounter] = useState(0); // [valor do estado, funcão para atualizar o estado da array]
  
//   function handleButtonCLick(){
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <Header title="Hello World"/>

//     <h1>{counter}</h1>
//     <button type="button" onClick={handleButtonCLick}>Aumentar</button>
//     </div>
//   );
// }