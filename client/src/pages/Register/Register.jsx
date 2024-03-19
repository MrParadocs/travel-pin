import { GiPirateHat } from 'react-icons/gi'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify';

import "./Register.scss";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const initialUser = {
        username: '',
        email: '',
        password: ''
    }

    const [confirmPassword, setConfirmPassword] = useState('')

    const [user, setUser] = useState(initialUser);

    const navigate = useNavigate();

    const [viewPwd, setViewPwd] = useState('password')

    const handleViewPwd = () => {
        viewPwd === 'password' ?
            setViewPwd('text') : setViewPwd('password')
    }

    const handleChange = ({ target }) => {
        setUser((currentUser) => ({
            ...currentUser,
            [target.name]: target.value,
        }))
    }

    // console.log(user.password, confirmPassword)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ((confirmPassword === user.password)) {
            if (user.email && user.password && user.username) {
                try {
                    await axios.post(`${import.meta.env.VITE_SERVER}/api/users/reg`, user)
                    // console.log(res)
                    navigate('/map')
                    toast.success('Registered, you may login', {
                        position: "bottom-right",
                        autoClose: 1500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    })
                } catch (error) {
                    toast.error('Something went wrong!', {
                        position: "top-right",
                        autoClose: 1500,
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
        } else {
            toast.warn('Please make sure your passwords are matching', {
                position: "top-right",
                hideProgressBar: true,
                theme: 'dark',
                autoClose: 1000,
            });
        }
    }

    return (
        <div className="register-container">
            <div className="left">
                <div>
                    <GiPirateHat className="icon" />
                </div>
                <span className="title">Avast, me heartie! Prepare to be the digital &apos;X&apos; on our treasure map - sign up and let the swashbucklin&apos; commence!</span>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <input name='username' type="text" placeholder="username" onChange={handleChange} value={user.username} />
                    <input name='email' type="email" placeholder="email" onChange={handleChange} value={user.email} />
                    <div className="password-component">
                        <input name='password' type={viewPwd} placeholder="password" onChange={handleChange} value={user.password} />
                        <input type={viewPwd} placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        {viewPwd === 'text' ? <FaEye className='pwd-icon active' onClick={handleViewPwd} /> : <FaEyeSlash className='pwd-icon' onClick={handleViewPwd} />}
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
