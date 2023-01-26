import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendUser = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios
      .post("https://api-node-js-production.up.railway.app/users", data)
      .catch((err) => console.log(err.response.data))
      .then((res) => console.log(res));

    return navigate("/front-end/");
  };

  return (
    <div className="add d-flex flex-column border rounded p-3 align-items-center my-5 shadow-lg">
      <h2>Add User</h2>
      Name: <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      Last Name:{" "}
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
      Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />
      Password:{" "}
      <input type="number" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary my-3" onClick={sendUser}>
        Send
      </button>
    </div>
  );
};

export default AddUser;
