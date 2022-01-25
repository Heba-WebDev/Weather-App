import React, {uses} from 'react';
import axios from 'axios';
import './App.css';
import Degree from './Degree';
import Additional from './Additional';
import CitySearch from './CitySearch'

function App() {
  return (
    <div className="app">
      <input placeholder='Enter your city'></input>
      <Degree />
      <Additional />

    </div>
  );
}

export default App;
