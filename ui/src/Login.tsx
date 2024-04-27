
import React, { useState } from "react";
import Navbar from './Navbar';
import "./General.css"
import "./Login.css"
import { Container } from "react-bootstrap";

function Login(): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      try {
        localStorage.setItem('username', "test");
        // redirect to /staff after login
        window.location.href = "/staff"

        // const response = await fetch('http://localhost:8000/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ username, password }),
        // });
  
        // const responseData = await response.json();
        // // localStorage.setItem('token', responseData.token);
        // // localStorage.setItem('username', responseData.username);
        // setResponseMessage(responseData.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    return (
        <div>
            <Navbar />
            <div className="features-section my-5" style={{ padding: "0 50px" }}>
                <Container>
                    <div className="row row-cols-md-4 g-4">
                        <div className="col hs-card">
                            <div className="login">
                                <div className="login-history">
                                    <div className="login-text">Login</div>
                                </div>
                                <form className="login-form" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className='hs-button-border' type="submit">Login</button>
                                </form>
                                {/* <div>Response from server: {responseMessage}</div> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Login;
