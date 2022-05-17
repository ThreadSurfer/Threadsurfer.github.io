import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { Navbar } from "react-bootstrap"


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>


  );
}

export default App;
