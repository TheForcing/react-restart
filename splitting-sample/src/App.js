import React,{ Suspense, useState} from "react";
import logo from  './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SpliteMe = loadable(()=> import('./SplitMe'));

function App() {
  const [ visible, setVisible ] = useState(false);
  const onClick= ()=>{
     setVisible(true);
  };
  const onMouseOver = ()=> {
    SpliteMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
     <img src={logo} className="App-logo" alt="logo"/>
     <p onClick={onClick} onMouseOver={onMouseOver}>Hello React</p>
     <Suspense fallback={<div>loading...</div>}>
       {visible && <SpliteMe/>}
     </Suspense>
     </header>
    </div>
  );
}

export default App;