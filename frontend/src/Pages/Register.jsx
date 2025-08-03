import { use } from 'react';
import '../Style/Default.css';
import '../Style/Form.css';
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../Component/Loading';

import { useNavigate } from 'react-router-dom';
import Nav1 from '../Component/Nav1';

function Register() {
    //untuk loadingscreen
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [con_email, setConEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, con_email, password);
        navigate('/login');

    };
    //use effect untuk run die
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <div>
            <Nav1 btnname="Log In" link="Login" message="Already have an account?" />
            <div className="container">
                <div className='formbox'>
                    <h2 className='h2custom'>Sign Up</h2>
                    <form className='form' onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username</label>
                        <input type="username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor='email'>Confirm Email</label>
                        <input type="email" id="con_email" name="con_email" value={con_email} onChange={(e) => setConEmail(e.target.value)} />
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='btnspan'><button type='submit' className='btn'>Sign Up</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;