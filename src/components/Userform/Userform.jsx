import React from "react";
import { useState } from "react";

import "./Userform.css";

export default function ({ addUser }) {
  let [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "" || user.name === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    addUser({ ...user, id: Math.floor(Math.random()*10000) });
    setUser({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, id: null, [name]: value });
  };
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label htmlFor="name" className="lable">
            name
          </label>
          <input
            className="input"
            type="text"
            placeholder="enter name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="email" className="lable">
            email
          </label>
          <input
            className="input"
            type="text"
            placeholder="enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="btndiv">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
