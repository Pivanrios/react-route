import './App.css'
import { Routes, Route} from "react-router-dom";
import Titulo from './components/Titulo';
import Color from './pages/Color';
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Titulo/>}>
            <Route path='colors' element={<Color/>}>
              <Route path='red' 
                element={ 
                  <div className='color' id='red'>
                    <h2>red</h2>
                  </div>}/>
              <Route path='blue' 
                element={
                  <div className='color' id='blue'>
                    <h2>Blue</h2>
                  </div>
                }/>
            </Route>
            <Route path='about' element={<p>About</p>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
