import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Validate inputs (add your validation logic here)

      // Make API call for registration
      const response = await fetch('http://localhost:5002/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      if (!response.ok) {
        throw new Error(`Registration failed with status ${response.status}`);
      }

      // Handle successful registration, redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleRegister} encType="multipart/form-data">
        <h3>register now</h3>
        {/* ... (rest of the form remains the same) */}
        <input type="submit" value="register new" name="submit" className="btn" />
      </form>
    </section>
  );
};

export default Register;
