import {Link} from 'react-router-dom'
export default function Footer(){

    return(
        <footer className="container">
            <article >
                <h4>Colors</h4>
                <ol>
                <li><Link to={'/colors/red'}>Red</Link></li>
                <li><Link to={'/colors/blue'}>Blue</Link> </li>
                </ol>
            </article>
            <article>
                <h4>About us</h4>
            </article>
        </footer>
    )
}