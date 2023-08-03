import {Link} from 'react-router-dom'

export default function Color(){

    return(
        <>
            <nav id='sidebar'>
                <h3>Colors</h3>
                <Link to={'red'}>red</Link>
                <Link to={'blue'}>blue</Link>
                <Link to={'green'}>green</Link>
                <Link to={'yellow'}>yellow</Link>
            </nav> 
        </>
    )
}