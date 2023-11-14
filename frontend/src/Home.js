import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StudentStyle.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollno] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/home", {
        name,
        email,
        rollno,
        gender,
        phone,
        address,
      })
      .then((result) => {
        console.log(result);
        // navigate('/');
        alert("Student Details Added successfully");

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <h1 className="heading">Welcome To Home Page</h1>
    <div className="container">
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          RollNo:
          <input
            type="text"
            name="name"
            placeholder="Enter your Roll Number"
            onChange={(e) => setRollno(e.target.value)}
            required
          />
        </label>

        <label>
          Gender:
          <input
            type="text"
            name="name"
            placeholder="Enter your Gender"
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="name"
            placeholder="Enter your Phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="name"
            placeholder="Enter your Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Home;
