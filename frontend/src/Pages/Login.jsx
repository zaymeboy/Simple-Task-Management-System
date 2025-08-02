import { use } from 'react';
import '../Style/Default.css';
import '../Style/Form.css';

import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit= (event)=>{
        event.preventDefault();
        console.log('email ', {email} , " password: ", {password})
        navigate('/dashboard');

    };
    return (
            <div className="container">
                <div className='formbox'>
                    <h2 className='h2custom'>Login</h2>
                    <form className='form' onSubmit={handleSubmit}>              
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>          
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>        
    )
}
export default Login;