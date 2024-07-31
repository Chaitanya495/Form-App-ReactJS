import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import FillForm from './components/FillForm';
import NotFound from './components/NotFound';
import Form from './components/Form';
import Save from './components/Save';

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<MainPage/>}>
            <Route index element={<FillForm/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/save' element={<Save/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
