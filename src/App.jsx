import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">React Router and Users API</h1>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
