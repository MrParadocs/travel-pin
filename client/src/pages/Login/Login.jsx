import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiAstronautHelmet } from 'react-icons/gi'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'

import { toast } from 'react-toastify';
import './Login.scss'

const Login = () => {

    const navigate = useNavigate();

    const [viewPwd, setViewPwd] = useState('password')

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChange = ({ target }) => {
        setUser((currentUser) => ({
            ...currentUser,
            [target.name]: target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user)
        if (user.username && user.password) {
            try {
                const res = await axios.post(`${import.meta.env.VITE_SERVER}/api/users/login`, user)
                // console.log(res.data)
                // window.location.reload(false)
                localStorage.setItem('username', res.data.username)
                navigate('/map')
                toast.success('Logged in', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            } catch (error) {
                toast.error(`You don't have an account, Please register`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        } else {
            toast.warn('All fields must be filled', {
                position: "top-right",
                hideProgressBar: true,
                theme: 'dark',
                autoClose: 1000,
            });
        }
    }

    const handleViewPwd = () => {
        viewPwd === 'password' ?
            setViewPwd('text') : setViewPwd('password')
    }

    return (
        <div className='login-container'>
            <div className='left'>
                <span className='title'>Halt! State your cyber credentials, brave voyager!</span>
                <GiAstronautHelmet className='icon' />
                <Link to={'/register'} className='register'>Join Us</Link>
            </div>
            <div className='right'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='username' name='username' onChange={handleChange} value={user.username} />
                    <div className="password-component">
                        <input type={viewPwd} placeholder='password' name='password' className='pwd' onChange={handleChange} value={user.password} />
                        {viewPwd === 'text' ? <FaEye className='pwd-icon active' onClick={handleViewPwd} /> : <FaEyeSlash className='pwd-icon' onClick={handleViewPwd} />}
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login