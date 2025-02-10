import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import HeaderLog from "../components/HeaderLog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from "axios";
import { useLocation } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function DashboardPatient() {
  const [appointments, setAppointments] = useState([]);
  // const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedView, setSelectedView] = useState("overview");
  const [allDocs, setAllDocs] = useState([]);
  const [docId, setDocId] = useState("");

  const location = useLocation();
  const { userId } = location.state || {}

  // Load appointments from local storage
  const apptApi = axios.create({
    baseURL: "http://localhost:8082/appointments"
  })
  useEffect(() => {
    const fetchAppointments = async () => {
      console.log("userId:", userId);
      try {
        const response = await apptApi.get("/patient/" + userId);
        console.log(response.data);
        response.status == 200 ? setAppointments(response.data) : setAppointments([]);
      } catch (err) {
        console.error("Error fetching appointments");
      }
    }
    fetchAppointments();
  }, []);

  // Handle form submit and save to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) {
      toast.error("Please fill all fields!");
      return;
    }

    // const newAppointment = { id: Date.now(), patientName, date, time, status: "Pending" };
    // const updatedAppointments = [...appointments, newAppointment];
    // setAppointments(updatedAppointments);

    // Save to localStorage

    // localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    let data = {};
    data.patientId = userId;
    data.doctorId = docId;
    data.appointmentDate = date;
    data.duration = time;
    data.status = "pending";

    const bookAppointment = () => {
      try {
        const response = apptApi.post("/", data);
        if (response.status == 200) {
          toast.success("Appointment booked successfully!");
          setDate("");
          setTime("");
        }
      } catch (err) {
        console.error("Error booking appointment");
      }
    }

    bookAppointment();

  };

  // Chart Data - Appointments by Date
  const appointmentsByDate = appointments.reduce((acc, appointment) => {
    const appointmentDate = new Date(appointment.date).toLocaleDateString();
    acc[appointmentDate] = (acc[appointmentDate] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(appointmentsByDate),
    datasets: [
      {
        label: "Appointments",
        data: Object.values(appointmentsByDate),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Chart Data - Appointment Status (Pie Chart)
  const statusCount = appointments.reduce((acc, appointment) => {
    acc[appointment.status] = (acc[appointment.status] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(statusCount),
    datasets: [
      {
        data: Object.values(statusCount),
        backgroundColor: ["#FF6347", "#28a745", "#f1c40f"],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    async function getDocs() {
      const api = axios.create({
        baseURL: "http://localhost:8081/doctor"
      })
      try {
        const response = await api.get("/");
        setAllDocs(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error occured");
      }
    }
    getDocs();
  }, [])

  const handleModal = (docId) => {
    setDocId(docId);
    alert(docId);
  }



  return (
    <>
      <HeaderLog />
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 bg-light p-3">
            <h4>Patient Dashboard</h4>
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
              className="btn btn-warning w-100"
              onClick={() => setSelectedView("profile")}
            >
              👤 Profile
            </button>
          </div>

          {/* Content */}
          <div className="col-md-9">
            {selectedView === "overview" && (
              <div className="card p-4">
                <h3>Overview</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h4>Appointments by Date</h4>
                    <Bar data={barChartData} options={{ responsive: true }} />
                  </div>
                  <div className="col-md-6">
                    <h4>Appointment Status</h4>
                    <Pie data={pieChartData} options={{ responsive: true }} />
                  </div>
                </div>
              </div>
            )}

            {selectedView === "appointments" && (
              <div className="card p-4">
                {allDocs.map((doc) =>
                  <ul key={doc.doctorId}>
                    <li><h1>{doc.fullname}</h1><span><button onClick={() => handleModal(doc.doctorId)}>Book Appointment</button></span></li>
                  </ul>
                )}
                <h3>Book an Appointment</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control mb-2"
                  />
                  <button type="submit" className="btn btn-success w-100">
                    Book Appointment
                  </button>
                </form>
              </div>
            )}

            {selectedView === "profile" && (
              <div className="card p-4">
                <h3>Profile</h3>
                <p>Profile details will go here.</p>
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

export default DashboardPatient;
