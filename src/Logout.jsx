import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume initially logged in
  const navigate = useNavigate();

  const handleLogout = async () => {
    // 1. Clear local storage or session storage (if used for tokens)
    localStorage.removeItem('token'); // Replace with your storage mechanism

    // 2. Perform any backend API calls (if applicable)
    // ... (your API call logic)

    // 3. Update logged-in state and navigate to login
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>You are logged out.</p>
      )}
    </div>
  );
};

export default Logout;
