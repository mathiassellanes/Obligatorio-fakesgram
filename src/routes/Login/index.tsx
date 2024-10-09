import React, { useState } from 'react';
import Input from '../../components/input';
import './styles.scss';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    return (
        <div className='container-login'>
                <div className='form-container'>
                        <Input
                        label={''}
                        value={form.email}
                        onChange={handleChange}
                        name={'email'}
                        type='email'
                        placeholder='Email address'
                        />

                        <Input
                        label={''}
                        value={form.password}
                        onChange={handleChange}
                        name={'password'}
                        type='password'
                        placeholder='Password'
                        />

                        <Button
                        label={'Log In'}
                        onClick={handleSubmit}
                        />
                </div>
                <div className='signUp-container'>
                        <p className='signUp-container-paragraph'>Don't have an account?</p>
                        <Link to='/' className='signUp-container-link'>Sign up</Link>
                </div>
        </div>
    );
};

export default Login;
