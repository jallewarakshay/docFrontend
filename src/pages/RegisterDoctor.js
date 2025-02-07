import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setRes } from '../actions'; // Make sure to import any action if needed
import '../Styles/RegisterDoctor.css';

export default function RegisterDoctor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const { password, confirmPassword } = location.state || {};
    console.log(password, confirmPassword);

    const res = useSelector((state) => state.res);  // Accessing 'res' from the state

    const [isRegister, setIsRegister] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        fullName: "",
        email: "",
        contact: "",
        qualification: "",
        speciality: "",
        experience: "",
        gender: "",
        license: "",
        password: password,
        confirmPassword: confirmPassword
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!data.fullName) newErrors.fullName = "Full name is required";
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!data.email) {
            newErrors.email = "Email is required";
        } else if (!emailPattern.test(data.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        const phonePattern = /^[0-9]{10}$/;
        if (data.contact.length === 0) {
            newErrors.contact = "Contact number is required";
        } else if (!phonePattern.test(data.contact)) {
            newErrors.contact = "Please enter a valid 10-digit contact number";
        }

        if (isRegister) {
            if (!data.password) {
                newErrors.password = "Password is required";
            } else if (data.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters long";
            }
            if (!data.confirmPassword) {
                newErrors.confirmPassword = "Please confirm your password";
            } else if (data.password !== data.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }

        if (!data.qualification) newErrors.qualification = "Qualification is required";
        if (!data.speciality) newErrors.speciality = "Speciality is required";
        if (!data.experience) newErrors.experience = "Experience is required";
        if (!data.gender) newErrors.gender = "Please select gender";
        if (!data.license) newErrors.license = "License number is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendData = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        dispatch(setRes(data));
        navigate("/logindoctor");
    };

    useEffect(() => {
        if (res) {
            navigate("/logindoctor");
        }
    }, [res, navigate]);

    return (
        <>
            <Header />
            <div className="form-container">
                <form className="w-25" id="form" onSubmit={sendData}>
                    <div className="mb-3">
                        <h2><b><u>Doctor Details</u></b></h2>
                        <br />
                        <label htmlFor="fullName" className="form-label">Full Name :</label>
                        <input
                            type="text"
                            onChange={(event) => setData({ ...data, fullName: event.target.value })}
                            className="form-control"
                            id="fullName"
                            placeholder="Enter your Full Name here"
                        />
                        {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Id :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter your Email here"
                            onChange={(event) => setData({ ...data, email: event.target.value })}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Contact No :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contact"
                            placeholder="Enter your Contact no. here"
                            onChange={(event) => setData({ ...data, contact: event.target.value })}
                        />
                        {errors.contact && <div className="text-danger">{errors.contact}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="qualification" className="form-label">Qualification :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="qualification"
                            placeholder="Enter your Qualification details"
                            onChange={(event) => setData({ ...data, qualification: event.target.value })}
                        />
                        {errors.qualification && <div className="text-danger">{errors.qualification}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="speciality" className="form-label">Speciality :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="speciality"
                            placeholder="Enter your Speciality here"
                            onChange={(event) => setData({ ...data, speciality: event.target.value })}
                        />
                        {errors.speciality && <div className="text-danger">{errors.speciality}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="experience" className="form-label">Experience :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="experience"
                            placeholder="Tell us about Your Experience"
                            onChange={(event) => setData({ ...data, experience: event.target.value })}
                        />
                        {errors.experience && <div className="text-danger">{errors.experience}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender :</label>
                        <select
                            className="form-select"
                            onChange={(event) => setData({ ...data, gender: event.target.value })}
                            id="gender"
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="license" className="form-label">License No :</label>
                        <input
                            type="text"
                            className="form-control"
                            id="license"
                            placeholder="Enter your License no. here"
                            onChange={(event) => setData({ ...data, license: event.target.value })}
                        />
                        {errors.license && <div className="text-danger">{errors.license}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
