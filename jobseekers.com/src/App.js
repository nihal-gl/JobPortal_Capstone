import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import './App.css'
import Navbar from "./Components/common/navbar/Navbar";
import Footer from "./Components/common/footer/Footer";
import Login from "./Components/login/Login";
import JobsListing from "./Components/jobListing/JobsListing";
import Signup from "./Components/signup/Signup";
import Employee from "./Components/employee/Employee";
import Addjob from "./Components/ADD_JOB/Addjob";
import ProfileForm from "./Components/profile/ProfileForm";

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="#about" />
        <Route path="/explorejobs" element={<JobsListing></JobsListing>} />
        <Route path="/user" element={<Employee></Employee>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/addjob" element={<Addjob></Addjob>}></Route>
        <Route path="/updateprofile" element={<ProfileForm></ProfileForm>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;