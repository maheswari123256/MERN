import React, { useState } from "react";
import "../Form.css"; // Use external CSS

const FormValidation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>10 Input Field Form</h2>

        {/* Name */}
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <p className="error">{errors.name}</p>

        {/* Email */}
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <p className="error">{errors.email}</p>

        {/* Mobile */}
        <label>Mobile</label>
        <input type="number" name="mobile" onChange={handleChange} />
        <p className="error">{errors.mobile}</p>

        {/* Age */}
        <label>Age</label>
        <input type="number" name="age" onChange={handleChange} />
        <p className="error">{errors.age}</p>

        {/* Password */}
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <p className="error">{errors.password}</p>

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleChange} />
        <p className="error">{errors.confirmPassword}</p>

        {/* Address */}
        <label>Address</label>
        <input type="text" name="address" onChange={handleChange} />
        <p className="error">{errors.address}</p>

        {/* City */}
        <label>City</label>
        <input type="text" name="city" onChange={handleChange} />
        <p className="error">{errors.city}</p>

        {/* State */}
        <label>State</label>
        <input type="text" name="state" onChange={handleChange} />
        <p className="error">{errors.state}</p>

        {/* Pincode */}
        <label>Pincode</label>
        <input type="number" name="pincode" onChange={handleChange} />
        <p className="error">{errors.pincode}</p>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
