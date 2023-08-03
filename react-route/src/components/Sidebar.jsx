import {Link} from 'react-router-dom'

export default function Color(){

    return(
        <>
            <nav id='sidebar'>
                <h3>Colors</h3>
                <Link to={'red'}>red</Link>
                <Link to={'blue'}>blue</Link>
            </nav> 
        </>
    )
}