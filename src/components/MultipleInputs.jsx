import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    country: "",
  });
  const handleChange=(e)=>{
setUser(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  console.log(user)
  return (
    <div>
      <input type="text" name="name" onChange={handleChange} placeholder="enter something ..."></input>
      <input type="text" name="username" onChange={handleChange} placeholder="enter something ..."></input>
      <input type="text" name="email" onChange={handleChange} placeholder="enter something ..."></input>
      <input type="text" name="password" onChange={handleChange} placeholder="enter something ..."></input>
      <input type="text" name="country" onChange={handleChange} placeholder="enter something ..."></input>
      
    </div>
  );
};

export default MultipleInputs;
