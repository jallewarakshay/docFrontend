import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const Help = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    message: "",
  });

  const [states] = useState([
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
    {
      value: "Andaman and Nicobar Islands",
      label: "Andaman and Nicobar Islands",
    },
    { value: "Chandigarh", label: "Chandigarh" },
    {
      value: "Dadra and Nagar Haveli and Daman and Diu",
      label: "Dadra and Nagar Haveli and Daman and Diu",
    },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Delhi", label: "Delhi" },
    { value: "Puducherry", label: "Puducherry" },
  ]);

  const [cities, setCities] = useState([]);

  const cityData = {
    "Andhra Pradesh": [
      { value: "Visakhapatnam", label: "Visakhapatnam" },
      { value: "Vijayawada", label: "Vijayawada" },
      { value: "Guntur", label: "Guntur" },
      { value: "Nellore", label: "Nellore" },
      { value: "Tirupati", label: "Tirupati" },
      { value: "Anantapur", label: "Anantapur" },
      { value: "Kurnool", label: "Kurnool" },
      { value: "Rajahmundry", label: "Rajahmundry" },
      { value: "Chittoor", label: "Chittoor" },
      { value: "Srikakulam", label: "Srikakulam" },
      { value: "Kadapa", label: "Kadapa" },
      { value: "Eluru", label: "Eluru" },
      { value: "Kakinada", label: "Kakinada" },
      { value: "Bhimavaram", label: "Bhimavaram" },
    ],
  
    "Arunachal Pradesh": [
      { value: "Itanagar", label: "Itanagar" },
      { value: "Tawang", label: "Tawang" },
      { value: "Bomdila", label: "Bomdila" },
      { value: "Ziro", label: "Ziro" },
      { value: "Pasighat", label: "Pasighat" },
      { value: "Tezpur", label: "Tezpur" },
      { value: "Aalo", label: "Aalo" },
      { value: "Along", label: "Along" },
      { value: "Namsai", label: "Namsai" },
      { value: "Rupa", label: "Rupa" },
    ],
  
    Assam: [
      { value: "Guwahati", label: "Guwahati" },
      { value: "Dibrugarh", label: "Dibrugarh" },
      { value: "Jorhat", label: "Jorhat" },
      { value: "Silchar", label: "Silchar" },
      { value: "Nagaon", label: "Nagaon" },
      { value: "Tinsukia", label: "Tinsukia" },
      { value: "Barpeta", label: "Barpeta" },
      { value: "Bongaigaon", label: "Bongaigaon" },
      { value: "Tezpur", label: "Tezpur" },
      { value: "Sibsagar", label: "Sibsagar" },
      { value: "Nalbari", label: "Nalbari" },
      { value: "Karimganj", label: "Karimganj" },
      { value: "Goalpara", label: "Goalpara" },
      { value: "Cachar", label: "Cachar" },
    ],
  
    Bihar: [
      { value: "Patna", label: "Patna" },
      { value: "Bhagalpur", label: "Bhagalpur" },
      { value: "Muzaffarpur", label: "Muzaffarpur" },
      { value: "Gaya", label: "Gaya" },
      { value: "Munger", label: "Munger" },
      { value: "Darbhanga", label: "Darbhanga" },
      { value: "Sasaram", label: "Sasaram" },
      { value: "Begusarai", label: "Begusarai" },
      { value: "Buxar", label: "Buxar" },
      { value: "Motihari", label: "Motihari" },
      { value: "Purnia", label: "Purnia" },
      { value: "Kishanganj", label: "Kishanganj" },
      { value: "Samastipur", label: "Samastipur" },
      { value: "Arrah", label: "Arrah" },
      { value: "Chapra", label: "Chapra" },
    ],
  
    "Chhattisgarh": [
      { value: "Raipur", label: "Raipur" },
      { value: "Bilaspur", label: "Bilaspur" },
      { value: "Korba", label: "Korba" },
      { value: "Durg", label: "Durg" },
      { value: "Rajnandgaon", label: "Rajnandgaon" },
      { value: "Bhilai", label: "Bhilai" },
      { value: "Jagdalpur", label: "Jagdalpur" },
      { value: "Raigarh", label: "Raigarh" },
      { value: "Ambikapur", label: "Ambikapur" },
      { value: "Bilaspur", label: "Bilaspur" },
      { value: "Dongargarh", label: "Dongargarh" },
      { value: "Kondagaon", label: "Kondagaon" },
      { value: "Champa", label: "Champa" },
      { value: "Dhamtari", label: "Dhamtari" },
    ],
  
    Gujarat: [
      { value: "Ahmedabad", label: "Ahmedabad" },
      { value: "Surat", label: "Surat" },
      { value: "Vadodara", label: "Vadodara" },
      { value: "Rajkot", label: "Rajkot" },
      { value: "Bhavnagar", label: "Bhavnagar" },
      { value: "Gandhinagar", label: "Gandhinagar" },
      { value: "Anand", label: "Anand" },
      { value: "Nadiad", label: "Nadiad" },
      { value: "Jamnagar", label: "Jamnagar" },
      { value: "Junagadh", label: "Junagadh" },
      { value: "Valsad", label: "Valsad" },
      { value: "Navsari", label: "Navsari" },
      { value: "Mehsana", label: "Mehsana" },
      { value: "Bhuj", label: "Bhuj" },
      { value: "Morbi", label: "Morbi" },
    ],
  
    Haryana: [
      { value: "Chandigarh", label: "Chandigarh" },
      { value: "Faridabad", label: "Faridabad" },
      { value: "Gurugram", label: "Gurugram" },
      { value: "Ambala", label: "Ambala" },
      { value: "Hisar", label: "Hisar" },
      { value: "Karnal", label: "Karnal" },
      { value: "Rohtak", label: "Rohtak" },
      { value: "Sonipat", label: "Sonipat" },
      { value: "Yamunanagar", label: "Yamunanagar" },
      { value: "Panipat", label: "Panipat" },
      { value: "Bhiwani", label: "Bhiwani" },
      { value: "Jind", label: "Jind" },
      { value: "Rewari", label: "Rewari" },
      { value: "Narnaul", label: "Narnaul" },
    ],
  
    "Himachal Pradesh": [
      { value: "Shimla", label: "Shimla" },
      { value: "Manali", label: "Manali" },
      { value: "Kullu", label: "Kullu" },
      { value: "Dharamshala", label: "Dharamshala" },
      { value: "Kangra", label: "Kangra" },
      { value: "Solan", label: "Solan" },
      { value: "Bilaspur", label: "Bilaspur" },
      { value: "Chamba", label: "Chamba" },
      { value: "Nahan", label: "Nahan" },
      { value: "Mandi", label: "Mandi" },
      { value: "Hamirpur", label: "Hamirpur" },
      { value: "Una", label: "Una" },
      { value: "Palampur", label: "Palampur" },
      { value: "Sundernagar", label: "Sundernagar" },
    ],
  
    Jharkhand: [
      { value: "Ranchi", label: "Ranchi" },
      { value: "Jamshedpur", label: "Jamshedpur" },
      { value: "Dhanbad", label: "Dhanbad" },
      { value: "Bokaro", label: "Bokaro" },
      { value: "Deoghar", label: "Deoghar" },
      { value: "Hazaribagh", label: "Hazaribagh" },
      { value: "Giridih", label: "Giridih" },
      { value: "Chaibasa", label: "Chaibasa" },
      { value: "Ramgarh", label: "Ramgarh" },
      { value: "Lohardaga", label: "Lohardaga" },
      { value: "Pakur", label: "Pakur" },
      { value: "Dumka", label: "Dumka" },
      { value: "Sahebganj", label: "Sahebganj" },
      { value: "Kodarma", label: "Kodarma" },
    ],
    Karnataka: [
      { value: "Bengaluru", label: "Bengaluru" },
      { value: "Mysuru", label: "Mysuru" },
      { value: "Hubballi", label: "Hubballi" },
      { value: "Belagavi", label: "Belagavi" },
      { value: "Mangalore", label: "Mangalore" },
      { value: "Davangere", label: "Davangere" },
      { value: "Ballari", label: "Ballari" },
      { value: "Chitradurga", label: "Chitradurga" },
      { value: "Shimoga", label: "Shimoga" },
      { value: "Tumakuru", label: "Tumakuru" },
      { value: "Bijapur", label: "Bijapur" },
      { value: "Raichur", label: "Raichur" },
      { value: "Hassan", label: "Hassan" },
      { value: "Udupi", label: "Udupi" },
      { value: "Karwar", label: "Karwar" },
    ],
    Kerala: [
      { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
      { value: "Kochi", label: "Kochi" },
      { value: "Kozhikode", label: "Kozhikode" },
      { value: "Kottayam", label: "Kottayam" },
      { value: "Alappuzha", label: "Alappuzha" },
      { value: "Thrissur", label: "Thrissur" },
      { value: "Malappuram", label: "Malappuram" },
      { value: "Palakkad", label: "Palakkad" },
      { value: "Kannur", label: "Kannur" },
      { value: "Idukki", label: "Idukki" },
      { value: "Pathanamthitta", label: "Pathanamthitta" },
      { value: "Wayanad", label: "Wayanad" },
      { value: "Kollam", label: "Kollam" },
      { value: "Ernakulam", label: "Ernakulam" },
      { value: "Varkala", label: "Varkala" },
    ],
    "Madhya Pradesh": [
      { value: "Bhopal", label: "Bhopal" },
      { value: "Indore", label: "Indore" },
      { value: "Jabalpur", label: "Jabalpur" },
      { value: "Ujjain", label: "Ujjain" },
      { value: "Gwalior", label: "Gwalior" },
      { value: "Khandwa", label: "Khandwa" },
      { value: "Satna", label: "Satna" },
      { value: "Sagar", label: "Sagar" },
      { value: "Rewa", label: "Rewa" },
      { value: "Khargone", label: "Khargone" },
      { value: "Dewas", label: "Dewas" },
      { value: "Shivpuri", label: "Shivpuri" },
      { value: "Chhindwara", label: "Chhindwara" },
      { value: "Mandsaur", label: "Mandsaur" },
      { value: "Ratlam", label: "Ratlam" },
    ],
    Maharashtra: [
      { value: "Mumbai", label: "Mumbai" },
      { value: "Pune", label: "Pune" },
      { value: "Nagpur", label: "Nagpur" },
      { value: "Nashik", label: "Nashik" },
      { value: "Aurangabad", label: "Aurangabad" },
      { value: "Solapur", label: "Solapur" },
      { value: "Thane", label: "Thane" },
      { value: "Kolhapur", label: "Kolhapur" },
      { value: "Satara", label: "Satara" },
      { value: "Akola", label: "Akola" },
      { value: "Amravati", label: "Amravati" },
      { value: "Chandrapur", label: "Chandrapur" },
      { value: "Ulhasnagar", label: "Ulhasnagar" },
      { value: "Dhule", label: "Dhule" },
      { value: "Jalgaon", label: "Jalgaon" },
      { value: "Nanded", label: "Nanded" },
      { value: "Latur", label: "Latur" },
      { value: "Ratnagiri", label: "Ratnagiri" },
      { value: "Palghar", label: "Palghar" },
      { value: "Vasai-Virar", label: "Vasai-Virar" },
    ],
    Manipur: [
      { value: "Imphal", label: "Imphal" },
      { value: "Thoubal", label: "Thoubal" },
      { value: "Bishnupur", label: "Bishnupur" },
      { value: "Churachandpur", label: "Churachandpur" },
      { value: "Ukhrul", label: "Ukhrul" },
      { value: "Senapati", label: "Senapati" },
      { value: "Tamenglong", label: "Tamenglong" },
      { value: "Kakching", label: "Kakching" },
      { value: "Jiribam", label: "Jiribam" },
      { value: "Noney", label: "Noney" },
    ],
    Meghalaya: [
      { value: "Shillong", label: "Shillong" },
      { value: "Tura", label: "Tura" },
      { value: "Jowai", label: "Jowai" },
      { value: "Nongpoh", label: "Nongpoh" },
      { value: "Mawkyrwat", label: "Mawkyrwat" },
      { value: "Williamnagar", label: "Williamnagar" },
      { value: "Baghmara", label: "Baghmara" },
      { value: "Resubelpara", label: "Resubelpara" },
      { value: "Amlarem", label: "Amlarem" },
      { value: "Ranikor", label: "Ranikor" },
    ],
    Mizoram: [
      { value: "Aizawl", label: "Aizawl" },
      { value: "Lunglei", label: "Lunglei" },
      { value: "Champhai", label: "Champhai" },
      { value: "Kolasib", label: "Kolasib" },
      { value: "Serchhip", label: "Serchhip" },
      { value: "Mamit", label: "Mamit" },
      { value: "Lawngtlai", label: "Lawngtlai" },
      { value: "Hnahthial", label: "Hnahthial" },
      { value: "Saitual", label: "Saitual" },
      { value: "Khawzawl", label: "Khawzawl" },
    ],
    Nagaland: [
      { value: "Kohima", label: "Kohima" },
      { value: "Dimapur", label: "Dimapur" },
      { value: "Mokokchung", label: "Mokokchung" },
      { value: "Wokha", label: "Wokha" },
      { value: "Mon", label: "Mon" },
      { value: "Zunheboto", label: "Zunheboto" },
      { value: "Tuensang", label: "Tuensang" },
      { value: "Phek", label: "Phek" },
      { value: "Longleng", label: "Longleng" },
      { value: "Kiphire", label: "Kiphire" },
    ],
  
    Odisha: [
      { value: "Bhubaneswar", label: "Bhubaneswar" },
      { value: "Cuttack", label: "Cuttack" },
      { value: "Rourkela", label: "Rourkela" },
      { value: "Berhampur", label: "Berhampur" },
      { value: "Baleswar", label: "Baleswar" },
      { value: "Sambalpur", label: "Sambalpur" },
      { value: "Puri", label: "Puri" },
      { value: "Koraput", label: "Koraput" },
      { value: "Jharsuguda", label: "Jharsuguda" },
      { value: "Balangir", label: "Balangir" },
    ],
    Punjab: [
      { value: "Chandigarh", label: "Chandigarh" },
      { value: "Amritsar", label: "Amritsar" },
      { value: "Ludhiana", label: "Ludhiana" },
      { value: "Patiala", label: "Patiala" },
      { value: "Jalandhar", label: "Jalandhar" },
      { value: "Bathinda", label: "Bathinda" },
      { value: "Mohali", label: "Mohali" },
      { value: "Kapurthala", label: "Kapurthala" },
      { value: "Hoshiarpur", label: "Hoshiarpur" },
      { value: "Ropar", label: "Ropar" },
    ],
    Rajasthan: [
      { value: "Jaipur", label: "Jaipur" },
      { value: "Udaipur", label: "Udaipur" },
      { value: "Jodhpur", label: "Jodhpur" },
      { value: "Kota", label: "Kota" },
      { value: "Ajmer", label: "Ajmer" },
      { value: "Bikaner", label: "Bikaner" },
      { value: "Alwar", label: "Alwar" },
      { value: "Pali", label: "Pali" },
      { value: "Chittorgarh", label: "Chittorgarh" },
      { value: "Sikar", label: "Sikar" },
    ],
    Sikkim: [
      { value: "Gangtok", label: "Gangtok" },
      { value: "Mangan", label: "Mangan" },
      { value: "Namchi", label: "Namchi" },
      { value: "Rangpo", label: "Rangpo" },
      { value: "Jorethang", label: "Jorethang" },
      { value: "Rhenock", label: "Rhenock" },
      { value: "Tadong", label: "Tadong" },
      { value: "Singtam", label: "Singtam" },
      { value: "Chungthang", label: "Chungthang" },
      { value: "Gyalshing", label: "Gyalshing" },
    ],
    TamilNadu: [
      { value: "Chennai", label: "Chennai" },
      { value: "Coimbatore", label: "Coimbatore" },
      { value: "Madurai", label: "Madurai" },
      { value: "Trichy", label: "Trichy" },
      { value: "Salem", label: "Salem" },
      { value: "Tirunelveli", label: "Tirunelveli" },
      { value: "Vellore", label: "Vellore" },
      { value: "Erode", label: "Erode" },
      { value: "Tiruppur", label: "Tiruppur" },
      { value: "Dindigul", label: "Dindigul" },
    ],
    Telangana: [
      { value: "Hyderabad", label: "Hyderabad" },
      { value: "Warangal", label: "Warangal" },
      { value: "Khammam", label: "Khammam" },
      { value: "Nizamabad", label: "Nizamabad" },
      { value: "Karimnagar", label: "Karimnagar" },
      { value: "Mahabubnagar", label: "Mahabubnagar" },
      { value: "Ramagundam", label: "Ramagundam" },
      { value: "Nalgonda", label: "Nalgonda" },
      { value: "Adilabad", label: "Adilabad" },
      { value: "Suryapet", label: "Suryapet" },
    ],
    Tripura: [
      { value: "Agartala", label: "Agartala" },
      { value: "Udaipur", label: "Udaipur" },
      { value: "Dharmanagar", label: "Dharmanagar" },
      { value: "Kailashahar", label: "Kailashahar" },
      { value: "Ambassa", label: "Ambassa" },
      { value: "Sepahijala", label: "Sepahijala" },
      { value: "Belonia", label: "Belonia" },
      { value: "Khowai", label: "Khowai" },
      { value: "Teliamura", label: "Teliamura" },
      { value: "Mohanpur", label: "Mohanpur" },
    ],
    UttarPradesh: [
      { value: "Lucknow", label: "Lucknow" },
      { value: "Agra", label: "Agra" },
      { value: "Varanasi", label: "Varanasi" },
      { value: "Kanpur", label: "Kanpur" },
      { value: "Ghaziabad", label: "Ghaziabad" },
      { value: "Meerut", label: "Meerut" },
      { value: "Allahabad", label: "Allahabad" },
      { value: "Aligarh", label: "Aligarh" },
      { value: "Bareilly", label: "Bareilly" },
      { value: "Moradabad", label: "Moradabad" },
    ],
    Uttarakhand: [
      { value: "Dehradun", label: "Dehradun" },
      { value: "Haridwar", label: "Haridwar" },
      { value: "Nainital", label: "Nainital" },
      { value: "Rishikesh", label: "Rishikesh" },
      { value: "Mussoorie", label: "Mussoorie" },
      { value: "Almora", label: "Almora" },
      { value: "Udham Singh Nagar", label: "Udham Singh Nagar" },
      { value: "Pithoragarh", label: "Pithoragarh" },
      { value: "Rudrapur", label: "Rudrapur" },
      { value: "Haridwar", label: "Haridwar" },
    ],
    "West Bengal": [
      { value: "Kolkata", label: "Kolkata" },
      { value: "Darjeeling", label: "Darjeeling" },
      { value: "Howrah", label: "Howrah" },
      { value: "Siliguri", label: "Siliguri" },
      { value: "Asansol", label: "Asansol" },
      { value: "Durgapur", label: "Durgapur" },
      { value: "Burdwan", label: "Burdwan" },
      { value: "Malda", label: "Malda" },
      { value: "Kharagpur", label: "Kharagpur" },
      { value: "Medinipur", label: "Medinipur" },
    ],
    "Andaman and Nicobar Islands": [
      { value: "Port Blair", label: "Port Blair" },
    ],
    Chandigarh: [{ value: "Chandigarh", label: "Chandigarh" }],
    "Dadra and Nagar Haveli and Daman and Diu": [
      { value: "Daman", label: "Daman" },
      { value: "Diu", label: "Diu" },
    ],
    Lakshadweep: [{ value: "Kavaratti", label: "Kavaratti" }],
    Delhi: [
      { value: "New Delhi", label: "New Delhi" },
      { value: "Old Delhi", label: "Old Delhi" },
    ],
    Puducherry: [{ value: "Puducherry", label: "Puducherry" }],
  };

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (formData.state) {
      setCities(cityData[formData.state] || []);
    }
  }, [formData.state]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSuccessMessage("Form Submitted Successfully!");

    console.log("Form Data Submitted:", formData);

    setFormData({
      fullname: "",
      mobile: "",
      email: "",
      state: "",
      city: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <br/>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Image Section (Left side) */}
        <div style={{ flex: 1, textAlign: "center",margin:"auto" }}>
          <img
            src="https://iili.io/2Qsj4zx.jpg"
            alt="Support"
            style={{ width: "100%", maxWidth: "500px", height: "500px" }}
          />
        </div>

        {/* Form Section (Right side) */}
        <div style={{ flex: 1, maxWidth: "500px", margin: "auto" }}>
          {/* <h3 style={{ textAlign: "center" }}><b style={{color:"black"}}>Support</b></h3> */}
          <br />
          {successMessage && (
            <div
              style={{
                color: "green",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {successMessage}
            </div>
          )}
          <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#007bff" }}><b>Support</b></h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
              }}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              maxLength={10} // Limit the input to 10 characters
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
              }}
            />

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
              }}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              disabled={!formData.state}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
              }}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
                height: "100px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;