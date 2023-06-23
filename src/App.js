import React, { Component } from 'react';
import { render } from '@testing-library/react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render(){
    return(
      <div>
      <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
      <button onClick={()=> this.scrollBox.scrollToBottom()}>
        맨 밑으로 
      </button>
      </div>
    );
  }
}
 

export default App;
