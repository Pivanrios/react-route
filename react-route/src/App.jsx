import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  

  return (
    <>
      <h1>Workshop28</h1>
      <div id='container'>
        <div id="navbar">
          <Link
            to={"/red"}>
              Red
          </Link>
          <Link
            to={"/blue"}>
              blue
          </Link>
          <Link
            to={"/"}>
              home
            </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route 
              path='/red'
              element={
                <div className='red'>
                  <h2>red</h2>

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
      </div>
    </>
  )
}

export default App
