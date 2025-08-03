import { use } from 'react';
import '../Style/Default.css';
import '../Style/Form.css';
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../Component/Loading';

import { useNavigate } from 'react-router-dom';
import Nav1 from '../Component/Nav1';
import axios  from 'axios';

function Register() {
    //untuk loadingscreen
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [con_email, setConEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        //console.log(email, username, password);
        //navigate('/login');
        setIsLoading(true);

        const data = {
            username: username,
            email: email,
            password: password,
        }
        
        try {
            const res = await axios.post('http://localhost:5000/user/register', data);
            console.log('Success:', res.data);
            navigate('/login');
        } catch (err) {
            if (err.response) {
                console.error('Error Status:', err.response.status);
                console.error('Error Data:', err.response.data);
                console.error('Error Headers:', err.response.headers);
            } else if (err.request) {
                console.error('No response received:', err.request);
            } else {
                console.error('Error Message:', err.message);
            }
            console.error('Error Config:', err.config);
        }finally{
            setIsLoading(false);
        }

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