import Nav from './Nav';
import {Outlet} from 'react-router-dom'
import Footer from './Footer';
export default function Titulo(){
    
    return(
        <div>
              <h1>Workshop28</h1>
              <Nav />
              <Outlet/>
              <Footer/>
        </div>  
    )
}