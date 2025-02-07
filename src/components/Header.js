import React from "react";
import { Link} from "react-router-dom";
import '../Styles/Header.css'

const Header = () => {
    return (
        <header className="shadow">
            {/* Top Alert */}
            <div className="alert alert-primary text-center mb-0" role="alert">
                Your Personal Health Care Partner !!!
            </div>

            {/* Navbar Section */}
            <div className="row bg-light nav-row">

                <div className="row bg-light nav-row">
                    <div className="col-lg-2 col-md-2 d-flex justify-content-center">
                        <div className="navbar-brand">
                            <img
                                src="https://iili.io/2ZfefwP.png" 
                                alt=""
                                width="120"
                                height="90"
                            />
                        </div>
                    </div>

                    {/* Middle Section - Navbar Links */}
                    <div className="col-lg-8 col-md-8 d-flex justify-content-center">
                        <nav className="navbar navbar-expand-lg w-100">
                            <div className="container-fluid w-100">
                                {/* Navbar Toggler (Mobile View) */}
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                {/* Navbar Links */}
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mx-auto gap-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active font-weight-bold hover-effect" to="/" style={{ color: '#343a40' }}>
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link font-weight-bold hover-effect" to="/about" style={{ color: '#343a40' }}>
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link font-weight-bold hover-effect" to="/Gallery" style={{ color: '#343a40' }}>
                                                Gallery
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link font-weight-bold hover-effect" to="/help" style={{ color: '#343a40' }}>
                                                Help
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to="/loginpatient">
                                    <button className="btn btn-outline-primary me-md-2 small-oval-button" type="button">Patient</button>
                                    </Link>
                                    <Link to="/logindoctor">
                                    <button className="btn btn-outline-primary small-oval-button" type="button">Doctor</button>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


                {/* Right Section - Social Icons */}
                <div className="col-lg-4 col-md-4 d-flex justify-content-end align-items-center">
                    <ul className="nav">

                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
