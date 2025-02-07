import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import axios from 'axios';
import '../Styles/LoginDoctor.css';
import { is } from 'date-fns/locale';

export default function LoginDoctor() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [isInCorrectPassword, setIsInCorrectPassword] = useState(false);

    const api = axios.create({ 
        baseURL: "http://localhost:8083/user"
     })


    async function myFunc(e) {
        e.preventDefault();
        // console.log(password, confirmPassword)
        // console.log(isLogin);

        if (handleSubmit()) {
            if (!isLogin)

                navigate("/registerdoctor", { state: {emailId: email, password: password, confirmPassword: confirmPassword } })
            else{
                try{
                    const response = await api.post("/login", {emailId:email});
                    if(response.status == 200){
                        if(response.data.password === password){
                            setIsInCorrectPassword(false);
                            navigate("/dashboardDoctor")
                        } else {
                            setIsInCorrectPassword(true);
                        }
                    }
                }
                catch(error){
                    console.error("Error occured");
                }
            }
        } else {
            return;
        }

    }

    // Validate email format
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Validate password (minimum 6 characters)
    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = () => {

        let validationErrors = {};

        if (!validateEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        if (!validatePassword(password)) {
            validationErrors.password = 'Password must be at least 8 characters long.';
        }

        if (isLogin && !password) {
            validationErrors.password = 'Password is required.';
        }

        if (!isLogin && password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            return true;
        }
        else return false;

    };

    return (
        <>
            <Header />
            <br />
            <div className="login-container">
                <h2><b>Doctor {isLogin ? "Login" : "Register"}</b></h2>
                <div className="login-form-container">
                    <div className="form-toggle">
                        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
                            Login
                        </button>
                        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
                            Register
                        </button>
                    </div>

                    <form onSubmit={myFunc}>
                        <div className="form">
                            <div className="input-group">
                                <label>Email Address:</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                            <div className="input-group">
                                <label>Password:</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>

                            {!isLogin && (
                                <div className="input-group">
                                    <label>Confirm Password:</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setIsInCorrectPassword(false);
                                            setConfirmPassword(e.target.value)
                                        }
                                        }
                                    />
                                    {/* <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "🙈" : "👁"}
                                </span> */}
                                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                                </div>
                            )}

                            {isInCorrectPassword && <div style={{color:"red"}}>Incorrect Password</div>}

                           {isLogin && <a href="#" className="forgot-password"><b>Forgot Password?</b></a>}

                            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                            <p>
                                {isLogin ? (
                                    <>
                                        Don’t have an account? <a href="#" onClick={() => setIsLogin(false)}>Register here</a>
                                    </>
                                ) : (
                                    <>
                                        Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login here</a>
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
