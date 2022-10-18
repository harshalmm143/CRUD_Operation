import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import MyNavbar from './Components/MyNavbar';
import UpdateUser from './Components/UpdateUser';


function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/alluser" element={<AllUser />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/updateuser/:userId" element={<UpdateUser />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
