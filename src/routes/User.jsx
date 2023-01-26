import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./User.css";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api-node-js-production.up.railway.app/users/${id}`)
      .catch((err) => console.log(err))
      .then((res) => setUser(res.data));
  }, []);

  const editUser = () => {
    const data = {
      firstName: firstName ? firstName : user.firstName,
      lastName: lastName ? lastName : user.lastName,
      email: email ? email : user.email,
      password: password ? password : user.password,
    };

    axios
      .patch(`https://api-node-js-production.up.railway.app/users/${id}`, data)
      .catch((err) => console.log(err.response.data))
      .then((res) => console.log(res));

    setToggle(!toggle);
    return navigate("/front-end/users");
  };

  const deleteUser = () => {
    axios
      .delete(`https://api-node-js-production.up.railway.app/users/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));

    return navigate("/front-end/");
  };

  return (
    <div className="user d-flex flex-column align-items-center my-5 mx-auto py-5 border rounded shadow-lg">
      <h2>User</h2>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      <div className="buttons d-flex justify-content-evenly">
        {!toggle && (
          <button
            className="btn btn-secondary"
            onClick={() => setToggle(!toggle)}
          >
            Edit User
          </button>
        )}
        {!toggle && (
          <button className="btn btn-danger" onClick={deleteUser}>
            Delete User
          </button>
        )}
      </div>

      {toggle && (
        <div className="edit d-flex flex-column border rounded p-3 align-items-center">
          First Name:{" "}
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          Last Name:{" "}
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          Email:{" "}
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          Password:{" "}
          <input type="number" onChange={(e) => setPassword(e.target.value)} />
          <div className="buttons d-flex justify-content-between my-3">
            <button className="btn btn-primary" onClick={editUser}>
              Save Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setToggle(!toggle)}
            >
              Cancel Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
