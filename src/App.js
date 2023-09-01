import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Login/Login';
import Student from './Student/Student';
import Mentor from './Mentor/Mentor';
import Management from './Management/Management';
import Signup from './Login/Signup/Signup';
import Dashboard from '../src/Main Component/Dashboard'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Header from './Main Component/Header';
import Class1 from './Student/Class1';
import Class2 from './Student/Class2';
import Class3 from './Student/Class3';
import Class4 from './Student/Class4';
import Class5 from './Student/Class5';
import Class6 from './Student/Class6';
import Class7 from './Student/Class7';
import Class8 from './Student/Class8';
import Class9 from './Student/Class9';
import Class10 from './Student/Class10';



function App() {
  const [loading,setloading]=useState(false)

  return (
    <div className="App">
      <ToastContainer position='top-center'/>
          <Routes>
            <Route  path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/student' element={<Student setloading={setloading} loading={loading}/>}/>
            <Route path='/mentor' element={<Mentor/>}/>
            <Route path='/management' element={<Management/>}/>
            <Route path='/dashboard' element={<Dashboard setloading={setloading} loading={loading}/>}/> 
            <Route path='/header' element={<Header/>}/>
            <Route path='/class1' element={<Class1/>}/>
            <Route path='/class2' element={<Class2/>}/>
            <Route path='/class3' element={<Class3/>}/>
            <Route path='/class4' element={<Class4/>}/>
            <Route path='/class5' element={<Class5/>}/>
            <Route path='/class6' element={<Class6/>}/>
            <Route path='/class7' element={<Class7/>}/>
            <Route path='/class8' element={<Class8/>}/>
            <Route path='/class9' element={<Class9/>}/>
            <Route path='/class10' element={<Class10/>}/>
          </Routes>
    </div>
  );
}

export default App;
