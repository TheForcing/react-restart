import React from 'react';
import { Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';



function App() {

  
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
         <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
       <Routes>
      <Route path="/" element={<Home />} exact={true}/>
      <Route path="/about" element={<About/>} />
      <Route path="/info" element={<About/>} />
      <Route path="/profiles/*" element={<Profiles/>}/>
      <Route path="/history" element={<HistorySample/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
