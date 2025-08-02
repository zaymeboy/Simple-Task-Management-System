import { use } from 'react';
import '../Style/Default.css';
import '../Style/Form.css';

import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Register(){
    const [email, setEmail]=useState('');
    const [con_email, setConEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit= (event)=>{
        event.preventDefault();
        console.log(email , con_email , password);
        navigate('/login');

    };
    return (
            <div className="container">
                <div className='formbox'>
                    <h2 className='h2custom'>Sign Up</h2>
                    <form className='form' onSubmit={handleSubmit}>              
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <label htmlFor='email'>Confirm Email</label>
                        <input type="email" id="con_email" name="con_email" value={con_email} onChange={(e)=> setConEmail(e.target.value)}/>         
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>    
    )
}
export default Register;