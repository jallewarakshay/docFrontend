import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import App from './App';
import Help from './pages/Help';
import LoginPatient from './pages/LoginPatient';
import LoginDoctor from './pages/LoginDoctor';
import RegisterDoctor from './pages/RegisterDoctor';
import { Provider } from 'react-redux';
import store from './pages/Store';
import RegisterPatient from './pages/RegisterPatient';
import About from './pages/About';
import Gallery from './pages/Gallery';
import DashboardPatient from './pages/DashboardPatient';
import DashboardDoctor from './pages/DashboardDoctor';
//pages

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/help' element={<Help />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/loginpatient' element={<LoginPatient />} />
                <Route path='/logindoctor' element={<LoginDoctor />} />
                <Route path='/registerdoctor' element={<RegisterDoctor />} />
                <Route path='/registerpatient' element={<RegisterPatient />} />
                <Route path='/dashboardPatient' element={<DashboardPatient/>}/>
                <Route path='/dashboardDoctor' element={<DashboardDoctor/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();