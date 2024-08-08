import React, { useState } from 'react';
import axios from "../../api/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../register/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserRegister = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post("/users", { name, email, password, avatar });
      if (response.status === 201) {
        alert("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='login-form'>
      <div className='text'>
        <h1>Register</h1>
      </div>
      <form className='Register-form' onSubmit={handleUserRegister}>
       
      <input type="text" placeholder='Enter your name'  onChange={(e) => setName(e.target.value)}/>
      <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter your password' onChange={(e) => setAvatar(e.target.value)} />
      <input type="url" placeholder='Enter your avatar' onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{loading ? "Loading..." : "Register"}</button>
      </form>
    </div>
  );
};

export default Register;
