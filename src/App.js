import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Score from './components/Score';
import NotFound from './components/NotFound'; 
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  }
  
  const [isDarkMode, setIsDarkMode] = useState(getTheme());
  
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
    document.body.className = getTheme()? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className = "App">
      <div className="box" >
        <DarkModeSwitch
            checked={!isDarkMode}
            onClick={() => setIsDarkMode(!isDarkMode)}
            moonColor={"#000"}
            sunColor={"#fff"}
            style={{ width:"100%", textAlign: "center" }}
          />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/score' element={<Score/>}/>
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
