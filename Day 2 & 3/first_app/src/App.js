import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Count from './components/Count';
import Listmap from './components/Listmap';
import Api from './components/Api';
import SampleUse from './components/SampleUse';
import GetCard from './components/GetCard';


function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/sb' element={<StateBasics/>}/>
        <Route path='/ct' element={<Count/>}/>
        <Route path='/lm' element={<Listmap/>}/>
        <Route path='/ap' element={<Api/>}/>
        <Route path='/su' element={<SampleUse/>}/>
        <Route path='/gc' element={<GetCard/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
