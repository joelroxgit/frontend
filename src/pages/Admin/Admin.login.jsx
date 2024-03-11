// AdminLoginPage.jsx
import { useState } from 'react';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Admin login logic
    console.log(`Admin Login: Username - ${username}, Password - ${password}`);
  };

  return (
    <div>
      <h1>Admin Login Page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLoginPage;
