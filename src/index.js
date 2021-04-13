import React from 'react';
import ReactDOM from 'react-dom';
// import { CallbackHook } from './components/05-memo/CallbackHook';
//import { TodoApp } from './components/06-reducers/TodoApp';
//import { HomeScreen } from './components/07-useContext/HomeScreen';
import { MainApp } from './components/07-useContext/MainApp';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { UsoDelUseRef } from './components/04-useRef/UsoDelUseRef';



//import { HooksApp } from './HooksApp';

ReactDOM.render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>,
  document.getElementById('root')
); 
