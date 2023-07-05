import React,{useState} from 'react'
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () =>{
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c2a9cf57adbe4a5980f5050cde4442c9',
      );
      setData(response.data);
    } catch(e){
      console.log(e);
    }
  };

  return (
     <NewsList/>
  );
};

export default App