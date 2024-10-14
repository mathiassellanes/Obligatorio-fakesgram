import React, { useState } from 'react';
import Input from '../../components/input';
import './styles.scss';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api';
import { routes } from '../../utils/constants/routes';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await login(form);

    navigate(routes.base.home.complete);
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
        <Link to={routes.base.home.complete} className='signUp-container-link'>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
