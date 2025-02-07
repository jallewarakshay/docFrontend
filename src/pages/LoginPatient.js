import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import '../Styles/LoginPatient.css';
import { data, useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: "http://localhost:8083/user"
})

export default function LoginPatient() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isInCorrectPassword,setIsInCorrectPassword] = useState(false);

    const navigate = useNavigate();

    async function  myFunc(e) {
        e.preventDefault();
        // console.log(password, confirmPassword)
        // console.log(isLogin);



        if (handleSubmit()) {
            if (!isLogin)

                navigate("/registerpatient", { state: { emailId: email, password: password, confirmPassword: confirmPassword } })
            else {
                try {
                   const response  = await api.post("/login", {emailId:email});

                   if(response.status == 200){
                        if(response.data.password === password){
                            setIsInCorrectPassword(false);
                            navigate("/dashboardPatient")
                        } else {
                            setIsInCorrectPassword(true);
                        }
                   }
                //    console.log(response.data.password,response.data.emailId);
                //    console.log(response.data);
                } catch(error) {
                    console.error("Error occured");
                }
            }
        } else {
            return;
        }

    }

    // Validate email format
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Validate password (minimum 6 characters)
    const validatePassword = (password) => password.length >= 8;

    const handleSubmit = () => {

        let validationErrors = {};

        if (!validateEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        if (!password) {
            validationErrors.password = 'Password is required.';
        } else if (!validatePassword(password)) {
            validationErrors.password = 'Password must be at least 8 characters long.';
        }

        if (!isLogin && password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <Header />
            <br />
            <div className="container">
                <h2><b>Patient {isLogin ? "Login" : "Register"}</b></h2>
                <div className="login-form-container">
                    <div className="form-toggle">
                        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
                        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Register</button>
                    </div>

                    <form onSubmit={myFunc}>
                        <div className="form">
                            <label>Email Address:</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}

                            <label>Password:</label>
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>{ 
                                        setIsInCorrectPassword(false);
                                        setPassword(e.target.value)}}
                                />
                                {/* <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "🙈" : "👁"}
                                </span> */}
                            </div>
                            {errors.password && <span className="error">{errors.password}</span>}

                            {!isLogin && (
                                <>
                                    <label>Confirm Password:</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                                </>
                            )}

                            {isInCorrectPassword && <div style={{color:"red"}}>Incorrect Password</div> }

                            {isLogin && <a href="#" className="forgot-password">Forgot Password?</a>}


                            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>


                            <p>
                                {isLogin ? (
                                    <>
                                        Don’t have an account?{" "}
                                        <a href="#" onClick={() => setIsLogin(false)}>Register here</a>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{" "}
                                        <a href="#" onClick={() => setIsLogin(true)}>Login here</a>
                                    </>
                                )}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
