import React, { useState } from 'react';
import Input from '../../components/input';
import './styles.scss';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import { register } from '../../api/auth';
import { routes } from '../../utils/constants/routes';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    username: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      await register(form);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className='container-register'>
      <div className='form-container'>
        <Input
          label={'Username'}
          value={form.username}
          onChange={handleChange}
          name={'username'}
          type='text'
          placeholder=''
        />

        <Input
          label={'Email address'}
          value={form.email}
          onChange={handleChange}
          name={'email'}
          type='email'
          placeholder=''
        />

        <Input
          placeholder=''
          label={'Password'}
          value={form.password}
          onChange={handleChange}
          name={'password'}
          type='password'
        />

        <Input
          label={'Repeat password'}
          value={form.repeatPassword}
          onChange={handleChange}
          name={'repeatPassword'}
          type='password'
          placeholder=''
        />

        <span className='form-container-error'>
          {error}
        </span>

        <Button
          label={'Sign Up'}
          onClick={handleSubmit}
        />
      </div>
      <div className='logIn-container'>
        <p className='logIn-container-paragraph'>Have an account?</p>
        <Link to={routes.auth.login.complete} className='logIn-container-link'>Sign in</Link>
      </div>
    </div>
  );
};

export default Register;
