import './App.css'
import { Routes, Route} from "react-router-dom";
import Titulo from './components/Titulo';
import Color from './pages/Color';
import Home from './components/Home';
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Titulo/>}>
            <Route index element={<Home/>}/>
            <Route path='colors' element={<Color/>}>
              <Route path='red' 
                element={ 
                  <div className='color' id='red'>
                    <h2>Red</h2>
                  </div>}/>
              <Route path='blue' 
                element={
                  <div className='color' id='blue'>
                    <h2>Blue</h2>
                  </div>
                }/>
              <Route path='green' 
                element={ 
                  <div className='color' id='green'>
                    <h2>Green</h2>
                  </div>}/>
              <Route path='yellow' 
                element={ 
                  <div className='color' id='yellow'>
                    <h2>Yellow</h2>
                  </div>}/>
            </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
