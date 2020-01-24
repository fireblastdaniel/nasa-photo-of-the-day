import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/Header/Header';
import MainCard from './components/MainCard/MainCard';
import OtherCardsList from './components/OtherCardsList/OtherCardsList'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [aponDate, setAponDate] = useState('');
  const [listPhotos, setListPhotos] = useState([]);

  const selectNewDate = () => {
    const dateInput = document.querySelector('.aponDate').value;
    setAponDate(`&date=${dateInput}`);
  };

  const handleClick = (e, data) => {
    console.log(e);
    setAponDate(`&date=${e.target.id}`)
  }

  function pad(num, size){
    var s = num+"";
    while(s.length < size)
      s = '0' + s;
      return s;
  }

  const fourRandomDates = () => {
    let today = new Date();
    let n = 4;
    let randomDates = [];

    //Get 4 random months
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let chooseFourMonths = new Array(n), len = months.length, taken = new Array(len);
    if(n > len)
      throw new RangeError('getRandom: more elements taken than available');
    while(n--) {
      var x = Math.floor(Math.random() * len);
      chooseFourMonths[n] = months[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }

    //Get 4 random days
    let chooseFourDays = []
    for(let i = 0; i < 4; i++)
      chooseFourDays.push( pad(Math.floor( Math.random()*28 + 1 ).toString(), 2));

    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 4; j++)
        randomDates.push(`${today.getFullYear() - i - 1}-${chooseFourMonths[j]}-${chooseFourDays[j]}`);
    }

    return randomDates;
  }

  const apiKey = 'JGtqQfO5Qbfx3hwGnyo9h0G57tYEZElgFdwYuvWd';
  const [randDates] = useState(fourRandomDates());
  useEffect(() => {
    const requests = [];
    for(let i = 0; i < randDates.length; i++)
      requests.push(axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randDates[i]}`));

    axios.all(requests).then(axios.spread((...responses) => {
      setListPhotos(responses);
    })).catch(errors => {})
  }, [])

  return (
    <div className="App">
      <div className='header-container'>
        <Header selectNewDate={selectNewDate}/>
      </div>
      <div className='main-container' >
        <h1>Astronomy Photo of the Day</h1>
        <h2>by NASA</h2>
        <MainCard date={aponDate} />
        <OtherCardsList listPhotos={listPhotos} randomDates={randDates} handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
