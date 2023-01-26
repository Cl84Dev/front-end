import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-node-js-production.up.railway.app/users")
      .catch((err) => console.log(err))
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      {users.map((user) => (
        <div
          className="users d-flex flex-column align-items-center my-5 mx-auto py-5 border rounded shadow-lg"
          key={user._id}
        >
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
          <Link className="btn btn-primary" to={`/front-end/users/${user._id}`}>
            See User Details
          </Link>
        </div>
      ))}
    </>
  );
};

export default Users;
