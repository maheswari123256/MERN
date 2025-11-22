import React, { useState,useEffect} from "react";
import Todo from "./Components/ToDo";
import "./App.css";
import bg from "./asset/img/pexels-merlin-11280357.jpg";
import { FaUser, FaMailBulk,FaMobileAlt,FaBirthdayCake,FaLock, FaLockOpen,FaHome,FaCity,FaMapPin,FaMapMarkedAlt } from "react-icons/fa";

const App = () => {
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({ name: "",
  email: "",
  mobile: "",
  age: "",
  password: "",
  confirmPassword: "",
  address: "",
  city: "",
  state: "",
  pincode: "", });
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  //  Handle form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";
    if (!form.email.includes("@")) err.email = "Enter valid email";
    if (form.mobile.length !== 10) err.mobile = "Mobile must be 10 digits";
    if (!form.age || form.age < 1) err.age = "Enter valid age";
    if (form.password.length < 6) err.password = "Minimum 6 characters";
    if (form.confirmPassword !== form.password)
      err.confirmPassword = "Passwords do not match";
    if (!form.address) err.address = "Address required";
    if (!form.city) err.city = "City required";
    if (!form.state) err.state = "State required";
    if (form.pincode.length !== 6) err.pincode = "Pincode must be 6 digits";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setErrors({});
      setPage("login");
      setLoginSuccess(true);
    }
  };
  useEffect(()=>{
    if(loginSuccess){
      const timer=setTimeout(()=>{
        setLoginSuccess(false);
      },5000);
      return()=>clearTimeout(timer)
    }
  },[loginSuccess]);

  

  return (
    <div
      className="app-container"
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      {/* HOME PAGE */}
      {page === "home" && (
        <div className="card">
          <h1>Home Page</h1>
          <button onClick={() => setPage("details")}>Register Page</button>
        </div>
      )}

      {/* DETAILS PAGE */}
      {page === "details" && (
        <div className="card1">
          <h1>Details Page</h1>

          <form onSubmit={handleSubmit} className="form-box">
             <div className="two-column">
          <div className="left-section">
            <label>Name:</label>
          
           <div className="input-box">
  <FaUser className="input-icon" />
  <input
    type="text"
    placeholder="Enter your name"
    name="name"
    value={form.name}
    onChange={handleChange}
  />
</div>

            <p className="error">{errors.name}</p>
            

            <label>Email:</label>
           <div className="input-box">
            < FaMailBulk className="input-icon"/>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            </div>
            <p className="error">{errors.email}</p>
            <label>Mobile</label>
            <div className="input-box">
          <FaMobileAlt className="input-icon" /> 
        <input type="number" name="mobile" placeholder="Enter your mobile number"value={form.mobile} onChange={handleChange} />
        </div>
        <p className="error">{errors.mobile}</p>

        {/* Age */}
        
        <label>Age</label>
        <div className="input-box">
        <FaBirthdayCake className="input-icon" />
        <input type="number" name="age" placeholder="Enter your age" value={form.age} onChange={handleChange} /></div>
        <p className="error">{errors.age}</p>

        {/* Password */}
        <label>Password</label>
        <div className="input-box">
         <FaLock className="input-icon" />
        <input type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} />
        </div>
        <p className="error">{errors.password}</p>
</div>
        {/* Confirm Password */}
         <div className="right-section">
        <label>Confirm Password</label>
         <div className="input-box">
        <FaLockOpen className="input-icon" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
        </div>
        <p className="error">{errors.confirmPassword}</p>

        {/* Address */}
        <label>Address</label>
         <div className="input-box">
          <FaHome className="input-icon"/>
        <input type="text" name="address" placeholder="Enter your address" value={form.address} onChange={handleChange} />
        </div>
        <p className="error">{errors.address}</p>

        {/* City */}
        <label>City</label>
         <div className="input-box">
           <FaCity className="input-icon"/>
        <input type="text" name="city" placeholder="Enter your city" value={form.city} onChange={handleChange} />
        </div>
        <p className="error">{errors.city}</p>

        {/* State */}
        <label>State</label>
        <div className="input-box">
          <FaMapMarkedAlt className="input-icon"/>
        <input type="text" name="state" placeholder="Enter your state" value={form.state} onChange={handleChange} />
        </div>
        <p className="error">{errors.state}</p>

        {/* Pincode */}
        <label>Pincode</label>
        <div className="input-box">
          <FaMapPin className="input-icon"/>
        <input type="number" name="pincode" placeholder="Enter your pincode" value={form.pincode} onChange={handleChange} />
        </div>
        <p className="error">{errors.pincode}</p>
</div>
</div>
            <br />

            <button type="submit" >
              Login
            </button>
          </form>
          
        </div>
      )}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div className="card2">
          <h1>Logout Page</h1>

          {loginSuccess && (
            <h2 style={{ color: "green" }}>✔ Login Successful!</h2>
          )}

          <button onClick={() => setPage("todo")}>Logout</button>
  </div>
)}

      {page === "todo" && (
  <div className="card3">
    
    <Todo/>
     <button onClick={() => setPage("home")}>Back to Home</button>
        </div>
      )}

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  
    </div>
  );
};

export default App;
