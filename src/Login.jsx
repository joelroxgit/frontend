import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('Vasanth');
  const [password, setPassword] = useState('vasanth');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Login response:', data);

      navigate('/home');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
    <section className="form-container">
      <div>
    <form action="" method="post" encType="multipart/form-data">
      <h3>login now</h3>
      <p>
        your email <span>*</span>
      </p>
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        required=""
        maxLength={50}
        className="box"
      />
      <p>
        your password <span>*</span>
      </p>
      <input
        type="password"
        name="pass"
        placeholder="enter your password"
        required=""
        maxLength={20}
        className="box"
      />
      <input
        type="submit"
        defaultValue="login new"
        name="submit"
        className="btn"
      />
    </form>
    </div>

  </section>
  </div>

  );
}
  

export default Login;
