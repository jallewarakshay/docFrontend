import Header from "../components/Header";
import axios from "axios";
import { Footer } from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RegisterPatient } from "../actions/patientActions";
import { Link } from "react-router-dom";
import { setRes } from '../actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const api = axios.create({
    baseURL: 'http://localhost:8089/patient'
})

export default function RegisterPatientComponent() {
    const navigate = useNavigate(); // Correct usage inside the component
    const dispatch = useDispatch();
    const location = useLocation();


    const {emailId, password, confirmPassword } = location.state || {}
    console.log(password, confirmPassword);
    const res = useSelector((state) => state.res); // Assuming res is the response from registration
    const [isRegister, setIsRegister] = useState(true); // Toggle between Register and Login
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        contact: "",
        dob: "",
        emailId: emailId,
        address: "",
        medicalHistory: "",
        password: password, // Add password field
        confirmPassword: confirmPassword
    });

    const [errors, setErrors] = useState({});

    // const handleChange = (event) => {
    //     setData({ ...data, [event.target.id]: event.target.value });
    // };

    const validateForm = () => {
        const newErrors = {};
        if (!data.firstName) newErrors.firstName = "First name is required";
        if (!data.lastName) newErrors.lastName = "Last name is required";

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!data.emailId) {
            newErrors.emailId = "Email is required";
        } else if (!emailPattern.test(data.emailId)) {
            newErrors.emailId = "Please enter a valid email address";
        }
        if (!data.gender) newErrors.gender = "Please select gender";

        if (isRegister) {
            if (!data.password) {
                newErrors.password = "Password is required";
            } else if (data.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters long";
            }

            // Confirm Password
            if (!data.confirmPassword) {
                newErrors.confirmPassword = "Please confirm your password";
            } else if (data.password !== data.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }
        if (!data.medicalHistory) newErrors.medicalHistory = "Patient Medical History is required";
        if (!data.address) newErrors.address = "Address is required";

        const phonePattern = /^[0-9]{10}$/;
        if (data.contact.length === 0) {
            newErrors.contact = "Contact number is required";
        } else if (!phonePattern.test(data.contact)) {
            newErrors.contact = "Please enter a valid 10-digit contact number";
        }
        setErrors(newErrors);
        console.log(newErrors)
        // If no errors, return true
        return Object.keys(newErrors).length === 0;
    };

    const sendData = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            // alert("Errors found");
            return;
        }

        else {
            try {
                dispatch(setRes(data));
                const response = await api.post("/", data);
                navigate("/loginpatient");
            }
            catch (error) {
                console.error("There was an error!", error);
            }
        }
    };
    useEffect(() => {
        if (res) {
            navigate("/loginpatient"); // Redirect when registration is successful
        }
    }, [res, navigate]);

    return (
        <>
            <Header />
            <div className="alert bodyContainer" role="alert">
                <h2><b><u>Personal Details</u></b></h2>
                <form className="w-25" id="form" onSubmit={sendData}>
                    <>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your Name here"
                                onChange={(event) => setData({ ...data, firstName: event.target.value })}
                            />
                            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your Surname here"
                                onChange={(event) => setData({ ...data, lastName: event.target.value })}
                            />
                            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                        </div>


                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date Of Birth :</label>
                            {/* <input
                            type="text"
                            className="form-control"
                            id="dob"
                            placeholder="Enter your DOB i.e:DD/MM/YYYY"
                            onChange={(event) => setData({ ...data, dob: event.target.value })}
                        /> */}
                            <DatePicker
                                selected={data.dob ? new Date(data.dob) : null}
                                onChange={(date) => setData({ ...data, dob: date })}
                                className="form-control"
                                id="dob"
                                name="dob"
                                placeholderText="DD/MM/YYYY"
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100} // Allows scrolling through many years
                            />
                            {errors.dob && <div className="text-danger">{errors.dob}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact No. :</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                name="contact"
                                placeholder="Enter your Contact here"
                                onChange={(event) => setData({ ...data, contact: event.target.value })}
                            />
                            {errors.contact && <div className="text-danger">{errors.contact}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Id :</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailId"
                                name="emailId"
                                value={data.emailId}
                                disabled
                                onChange={(event) => setData({ ...data, emailId: event.target.value })}
                            />
                            {errors.emailId && <div className="text-danger">{errors.emailId}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address :</label>
                            <textarea
                                className="form-control"
                                id="address"
                                name="address"
                                placeholder="Enter your Address here"
                                onChange={(event) => setData({ ...data, address: event.target.value })}
                            />
                            {errors.address && <div className="text-danger">{errors.address}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender :</label>
                            <select
                                className="form-select"
                                id="gender"
                                name="gender"
                                onChange={(event) => setData({ ...data, gender: event.target.value })}
                                value={data.gender} // Bind value to state
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <div className="text-danger">{errors.gender}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="medicalHistory" className="form-label">Medical History :</label>
                            <textarea
                                className="form-control"
                                id="medicalHistory"
                                name="medicalHistory"
                                placeholder="Enter your Medical History Info here"
                                onChange={(event) => setData({ ...data, medicalHistory: event.target.value })}
                            />
                            {errors.medicalHistory && <div className="text-danger">{errors.medicalHistory}</div>}
                        </div>
                    </>

                    <button type="submit" className="btn btn-primary w-100">Register</button>

                </form>

            </div>

            <Footer />
        </>
    );
}