import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import HeaderLog from "../components/HeaderLog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from 'axios';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function DashboardPatient() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedView, setSelectedView] = useState("overview");
  const [allDocs, setAllDocs] = useState([]);
  const [showBookAppointment,setShowBookAppointment] = useState(false);

 // Fetch appointments from the database
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



  // Handle form submit and save to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientName || !date || !time) {
      toast.error("Please fill all fields!");
      return;
    }

    const newAppointment = { patientName, date, time, status: "Pending" };
    try {
      const response = await axios.post("http://localhost:8082/appointments", newAppointment);
      setAppointments([...appointments, response.data]);
      toast.success("Appointment booked successfully!");
      setPatientName("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error booking appointment", error);
      toast.error("Error booking appointment");
    }
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

  useEffect(()=>{
    async function getDocs(){
      const api = axios.create({
        baseURL:"http://localhost:8081/doctor"
      })
      try{
        const response = await api.get("/");
        setAllDocs(response.data);
        console.log(response.data);
      }catch(err){
        console.error("Error occured");
      }
    }
    getDocs();
  },[])

  const handleModal = ()=>{
    setShowBookAppointment(!showBookAppointment);
  };

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
                
                {allDocs.map((doc)=> 
                <div className="card p-4 my-3" style={{border:"1px solid black"}}>
                  <ul style={{ listStyleType: "square", listStyle:"none"}}  key={doc.doctorId}>
                    <li><h2>Dr. {doc.fullname}</h2>
                <address><h5><b>Degree: </b>{doc.qualification.toUpperCase()}</h5></address>
                  <h5><b>Speciality: </b>{doc.speciality.toUpperCase()}</h5>
                   <h5> {doc.experience} years of experience in career.</h5>
                   <span><button onClick={()=>handleModal()}>Book</button></span></li>
                  </ul>
                </div>
                )}
                {showBookAppointment &&(
                 <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                 <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-content">
                     <div className="modal-header">
                       <h5 className="modal-title">Book an Appointment</h5><br/>
                       <button type="button " style={{ color:'red',width:'9%'}} className="btn btn-transparent close" onClick={handleModal}>X
                       </button>
                     </div>
                     <div className="modal-body">
                       <form onSubmit={handleSubmit}>
                         <input
                           type="text"
                           placeholder="Patient Name"
                           value={patientName}
                           onChange={(e) => setPatientName(e.target.value)}
                           className="form-control mb-2"
                         />
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
                   </div>
                 </div>
               </div>
             )}
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
