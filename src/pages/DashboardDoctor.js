import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import HeaderLog from "../components/HeaderLog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { data, useLocation } from "react-router-dom";
import axios from "axios";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [selectedView, setSelectedView] = useState("overview");
  const [user,setUser]=useState({});

  const location = useLocation();

  const {userId } = location.state || {};

  useEffect( () => {
    async function fetchDoc () {
    try{
      const api = axios.create({
        baseURL: "http://localhost:8081/doctor"
      });
      const response = await api.get("/"+ userId);
      // console.log(response.data);
      setUser(response.data);
  
      // if(response.status == 200){
      //   console.log(response.data);
      // }
    }catch(error){
      console.error("Error occured");
    }
   }
   fetchDoc();
  },[userId]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await axios.get("http://localhost:8082/appointments");
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments", error);
      }
    }
    fetchAppointments();
  }, []);


  // Data for profile
  const profileData = {
    "Full Name": `${user.fullname}`,
    "Email Id": `${user.email}`,
    "Contact No.": `${user.contact}`,
    "Qualification": `${user.qualification}`,
    "Speciality": `${user.speciality}`,
    "Experience": `${user.experience}`,
    "Gender": `${user.gender}`,
    "License": `${user.license}`
  };

  const history = [
    { name: "Paritosh Uukey", date: "2025-01-15", diagnosis: "Flu" },
    { name: "Abhinav Kawalkar", date: "2025-01-20", diagnosis: "Piles" }
  ];

  // // Load appointments from local storage
  // useEffect(() => {
  //   const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  //   setAppointments(storedAppointments);
  // }, []);

  // // Listen for changes in localStorage (for syncing)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  //     setAppointments(storedAppointments);
  //   }, 1000); // Check for changes every second

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  // Bar Chart Data (Appointments Count)
  const chartDataBar = {
    labels: ["Confirmed", "Cancelled", "Pending"],
    datasets: [
      {
        label: "Appointments",
        data: [
          appointments.filter((appointment) => appointment.status === "Confirmed").length,
          appointments.filter((appointment) => appointment.status === "Cancelled").length,
          appointments.filter((appointment) => appointment.status === "Pending").length,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data (Appointment Status Distribution)
  const chartDataPie = {
    labels: ["Confirmed", "Cancelled", "Pending"],
    datasets: [
      {
        data: [
          appointments.filter((appointment) => appointment.status === "Confirmed").length,
          appointments.filter((appointment) => appointment.status === "Cancelled").length,
          appointments.filter((appointment) => appointment.status === "Pending").length,
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)", "rgba(255, 159, 64, 0.6)"],
        hoverBackgroundColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
      },
    ],
  };

  // // Update appointment status
  // const updateStatus = (id, newStatus) => {
  //   const updatedAppointments = appointments.map((appointment) =>
  //     appointment.id === id ? { ...appointment, status: newStatus } : appointment
  //   );
  //   setAppointments(updatedAppointments);
  //   localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  //   toast.success(`Appointment marked as ${newStatus}`);
  // };

  // // Cancel Appointment
  // const cancelAppointment = (id) => {
  //   const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
  //   setAppointments(updatedAppointments);
  //   localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  //   toast.success("Appointment has been cancelled.");
  // };
   

    // Update appointment status
    const updateStatus = async (id, newStatus) => {
      try {
        await axios.put(`http://localhost:8082/appointments/${id}`, { status: newStatus });
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === id ? { ...appointment, status: newStatus } : appointment
          )
        );
        toast.success(`Appointment marked as ${newStatus}`);
      } catch (error) {
        console.error("Error updating appointment status", error);
      }
    };
  
    // Cancel Appointment
    const cancelAppointment = async (id) => {
      try {
        await axios.delete(`http://localhost:8082/appointments/${id}`);
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
        toast.success("Appointment has been cancelled.");
      } catch (error) {
        console.error("Error cancelling appointment", error);
      }
    };


  return (
    <>
      <HeaderLog />
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 bg-light p-3">
            <h4>Welcome,</h4>
            <h5> Dr. {user.fullname}</h5>
            <button
              className="btn btn-primary w-100 mb-2"
              onClick={() => setSelectedView("overview")}
            >
              📊 Overview
            </button>
            <button
              className="btn btn-secondary w-100 mb-2"
              onClick={() => setSelectedView("appointments")}
            >
              📅 Appointments
            </button>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => setSelectedView("profile")}
            >
              👤 Profile
            </button>
            <button
              className="btn btn-info w-100"
              onClick={() => setSelectedView("history")}
            >
              📝 History
            </button>
          </div>

          {/* Content */}
          <div className="col-md-9">
            {selectedView === "overview" && (
              <div className="card p-4">
                <h3>Appointments Overview</h3>
                <div className="mb-4" style={{ width: "100%", height: "300px" }}>
                  <h5>Appointment Status Distribution (Bar Chart)</h5>
                  <Bar
                    data={chartDataBar}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                    height={250} // Fixed height for the Bar chart
                    width={400} // Fixed width for the Bar chart
                  />
                </div>

                <div className="mb-4" style={{ width: "100%", height: "300px" }}>
                  <h5>Appointment Status Breakdown (Pie Chart)</h5>
                  <Pie
                    data={chartDataPie}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                    height={250} // Fixed height for the Pie chart
                    width={400} // Fixed width for the Pie chart
                  />
                </div>
              </div>
            )}

            {selectedView === "appointments" && (
              <div className="card p-4">
                <h3>Manage Appointments</h3>
                <ul className="list-group">
                  {appointments.length === 0 ? (
                    <p>No appointments yet.</p>
                  ) : (
                    appointments.map((appointment) => (
                      <li key={appointment.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          {appointment.patientName} - {appointment.date} at {appointment.time}
                        </div>
                        <div>
                          <button
                            className="btn btn-success"
                            onClick={() => updateStatus(appointment.id, "Confirmed")}
                          >
                            Confirm
                          </button>
                          <button
                            className="btn btn-danger ml-2"
                            onClick={() => cancelAppointment(appointment.id)}
                          >
                            Cancel
                          </button>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}

            {selectedView === "profile" && (
              <div style={{ width: "50%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
                <h3>Profile Details</h3>
                <div style={{ textAlign: "left", marginTop: "10px" }}>
                  {Object.entries(profileData).map(([key, value]) => (
                    <p key={key} style={{ margin: "10px 0", fontSize: "16px" }}><strong>{key}:</strong> {value}</p>
                  ))}
                </div>
              </div>
            )}

            {selectedView === "history" && (
              <div className="card p-4">
                <h3>History</h3>
                <ul style={{ textAlign: "left", marginTop: "10px", listStyle: "none", padding: 0 }}>
                  {history.map((record, index) => (
                    <li key={index} style={{ margin: "10px 0", fontSize: "16px" }}>
                      <strong>{record.name}</strong> - {record.date}, Diagnosis: {record.diagnosis}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
