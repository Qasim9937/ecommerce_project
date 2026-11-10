import {Link, useNavigate, NavLink} from 'react-router-dom'
import {List} from 'react-bootstrap-icons'
import Button from '../Button'


import './Navbar.css'

export default function Navbar(){
    const navigate = useNavigate()


    return(
        <header className='nav-header'>
             <nav id="navbar" className='navbar'>
                <Link to='/' className='navlink'>
                    <img src='https://chinadojo.org/_next/static/media/logo.cd5897af.png' alt='logo' id='logo' style={{width: '200px'}}/>
                </Link>

                <div id='nav-links' className=''>
                    <NavLink to='/about' className='navlink'>About us</NavLink>
                    <NavLink to='/services' className='navlink'>Services</NavLink>
                    <NavLink to='/shipping' className='navlink'>Shipping tools</NavLink>
                    <NavLink to='/blog' className='navlink'>Blog</NavLink>
                    <Link to='/#rates-section' className='navlink'>Rate</Link>
                </div>

                <Button text='contact us' onClick={() => navigate('/#contact')}  className='contact-us btn btn-warning rounded px-5'/>

                {/* <i className="bi bi-list menu"></i> */}
                <List/>
            </nav>
        </header>
       
    )
}