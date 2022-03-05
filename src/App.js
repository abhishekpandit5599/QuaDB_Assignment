import './App.css';
import Home from './components/Home/Home';
import React,{useEffect,useState} from 'react';
import Summary from './components/Summary/Summary';

function App() {

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  // Set Id function
  const setIdFunc=(id)=>{
    setId(id);
  }

  useEffect(() => {
    APICall();
  }, [])

  // API Calling function
  const APICall = async()=>{
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const data = await response.json();
    setData(data);
  }
  
  return (
    <div className="App">
      {id===0 && data.map((item,index)=>{
        return <Home key={index} item={item.show} setIdFunc={setIdFunc}/>
      })}

      {
        id!==0 && (data.filter((e)=>e.show.id === id)).map((item,index)=>{
          return <Summary key={index} item={item.show} setIdFunc={setIdFunc} />
        })
      }
    </div>
  );
}

export default App;
