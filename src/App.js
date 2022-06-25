import './App.css';
import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Info from './Pages/Info';
import ChooseInput from './Pages/ChooseInput';
import ImportSuccess from './Pages/ImportSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Info/>}></Route>
            <Route path='/data' element={<ChooseInput/>}></Route>
            <Route path='/success' element={<ImportSuccess/>}></Route>
          </Routes>          
        </div>
      </div>
    </Router>
  );
}

export default App;

