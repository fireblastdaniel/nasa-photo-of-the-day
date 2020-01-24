import React, {useState} from "react";
import Header from './components/Header/Header';
import MainCard from './components/MainCard/MainCard';
import { Button } from 'reactstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [aponDate, setAponDate] = useState('');

  const selectNewDate = () => {
    const dateInput = document.querySelector('.aponDate').value;
    setAponDate(`&date=${dateInput}`);
  };

  return (
    <div className="App">
      <div className='header-container'>
        <Header selectNewDate={selectNewDate}/>
      </div>
      <div className='main-container' >
        <h1>Astronomy Photo of the Day</h1>
        <h2>by NASA</h2>
        {/* <FullScreenCard/> */}
        <MainCard date={aponDate} />
        {/* <OtherCardsList/> */}
      </div>
    </div>
  );
}

export default App;
