import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/score' element={<Score/>}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
