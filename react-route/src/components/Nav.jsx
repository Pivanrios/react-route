import {Link} from 'react-router-dom'

export default function Nav(){

    return(
        <nav id='navbar'>
            <Link 
                to={'/'}> 
                Home
            </Link>
            <Link
                to={"colors"}>
                Colors
            </Link>
        </nav>
    )
}