import React, { useState } from 'react'; 
import './Loginpage.css';

import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  function adminlog() {
    navigate('/start');
  }

  const handleLogin = async (e) => {
    e.preventDefault();  
    
    try {
      const response = await fetch('http://localhost:5000/api/userpasswordcheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({ username, password }), 
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        adminlog();  
      } else {
        setError('Invalid credentials');  
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Something went wrong');  
    }
  };
    return (
        <div className="App">
          <div className="center-container">
            <div className="login-container">
              <h2>Admin Login Page</h2>
              <form onSubmit={handleLogin}>
                <div>
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit">Login</button>
              </form>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
        </div>
      );
  
}

export default Loginpage;
