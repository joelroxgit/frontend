// InstructorLoginPage.jsx
import { useState } from 'react';
import '../../index.css'

const InstructorLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'instructor' && password === 'instructor123') {
      alert('Login successful!');
    } else {
      alert('Incorrect username or password');
    }
   }

  return (
    <div>
      <h2>Instructor Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default InstructorLoginPage;
