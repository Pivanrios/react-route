import {Outlet} from 'react-router-dom'
import Sidebar from '/src/components/Sidebar.jsx'

export default function Color(){

    return(
        <section className='container'>
            <Sidebar />
            <Outlet/>
        </section>
    )
}