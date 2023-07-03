import React from 'react';
import { Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
       <Routes>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/info" component={About} />
      <Route path="/profil/:username" component={Profile}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
