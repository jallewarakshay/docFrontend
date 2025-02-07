import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: 'http://localhost:8089/patient'
})



export default function TestApi() {
    let { data, setData } = useState([]);
    let [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        contact:"",
        gender:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    async function formSubmitHandler(event) {
        event.preventDefault();
        try {
            const response = await api.post("/", formData)
        }
        catch(err){console.error("Post Failed..", err)};
    }


    api.get("/")
        .then(response => {
            console.log(response.data);
        }).catch(err => console.error("Something fihsy", err));

    return (
        <>
            <h1>Hello API</h1>
            <form onSubmit={formSubmitHandler}>
                <input type="text" onChange={handleChange} name="firstName" placeholder="enter first name" />
                <input type="text" onChange={handleChange} name="lastName" placeholder="enter last name" />
                <input type="text" onChange={handleChange} name="contact" placeholder="enter contact num" />
                <input type="text" onChange={handleChange} name="gender" placeholder="enter gender" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}