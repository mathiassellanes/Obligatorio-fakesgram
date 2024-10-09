import React, { useState } from 'react';
import Input from '../../components/input';
import './styles.scss';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    username: ''
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
    <div className='root'>
        <div className='form-container'>
            <Input
            label={''}
            value={form.username}
            onChange={handleChange}
            name={'username'}
            type='text'
            placeholder='Username'
            />

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

            <Input
            label={''}
            value={form.repeatPassword}
            onChange={handleChange}
            name={'repeatPassword'}
            type='password'
            placeholder='Repeat password'
            />

            <Button
            label={'Sign Up'}
            onClick={handleSubmit}
            />
        </div>
        <div className='logIn-container'>
            <p className='logIn-container-paragraph'>Have an account?</p>
            <Link to='/login' className='logIn-container-link'>Sign in</Link>
        </div>
    </div>
  );
};

export default Register;
