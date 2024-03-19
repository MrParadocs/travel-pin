import { GiDirectionSigns } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {

    const navigate = useNavigate();

    const currentUser = localStorage.getItem('username')

    // console.log(currentUser)

    const handleLogout = () => {
        localStorage.removeItem('username')
        navigate('/')
    }

    return (
        <div className="nav-container">
            <div>
                <Link to={'/'} className="logo">
                    Travel Pin
                    <GiDirectionSigns className='icon' />
                </Link>
            </div>
            <div className="links">
                <div>
                    <Link to={'/about'} className="link">
                        About
                    </Link>
                </div>
                {
                    !currentUser ?
                        <>
                            <div>
                                <Link to={'/login'} className="link">
                                    Login
                                </Link>
                            </div>
                            <div>
                                <Link to={'/register'} className="link">
                                    Register
                                </Link>
                            </div>
                        </>

                        : 
                        <>
                            <div onClick={handleLogout} className='link'>
                                Logout
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar