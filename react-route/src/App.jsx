import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <div id="main-section">
        <h1>Workshop28</h1>
        <Routes>
          <Route 
            path='/red'
            element={
              <div className='red'>
                <p>red</p>                
              </div>
            }>

          </Route>
          <Route
            path='/blue'
            element={
              <div className='blue'>
                <p>blue</p>
              </div>
            }>

          </Route>

        </Routes>
      </div>
    </>
  )
}

export default App
