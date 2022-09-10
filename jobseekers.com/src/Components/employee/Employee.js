import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { DiCssTricks } from "react-icons/di";
import "./employee.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

export const Employee = () => {

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Olivia_Michel_Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Olivia_Resume.pdf';
        alink.click();
      })
    })
  }


  return (
    <>
      <div className="container emp-profile">
        <div className="text-center">
        <div className="p-4 box mt-3 text-center">
       <h1> Hello Welcome </h1><br />
        {user && user.email}
      </div>
        </div>
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3v137qLuURE1ci8muGc-S9oUCBUDb5lSZycWWq6AgiMt445AF6KQwaD1RwS0FKCaf3RE&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-head">
                <h5>Olivia Mitchell</h5>
                <h6> Web development</h6>
                <button className="btn btn-primary" onClick={onButtonClick}>
                  Download Resume
                </button>
                {/* <a href="Olivia_Michel_Resume.pdf">
                  <button>Download Resume</button>
                </a> */}

                {/* <button className="dontPrint" onClick={() => window.print()
                }> Capture as PDF </button>*/}
              </div>
            </div>

          </div>
          <div className="row">
            {/* //left side */}
            <div className="col-md-4">
              <div className="skils">
                <h4><DiCssTricks />  Skills</h4>
                <p className="skils-info">
                  Software: MATLAB, AutoCAD, Microsoft Office, SolidWorks
                  Machines: CNC, Lathes
                </p>
              </div>
              <br />
              <div className="profile-work">
                <h4>My Social Profile</h4>
                <a className="fa" href="">
                  <FaLinkedinIn />
                </a>

                <a className="fa" href="">
                  <FaTwitter />
                </a>

                <a className="fa" href="">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </div>

            <div className="col-md-8 about-info">
              <div className="tab-content profile-tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      aria-current="page"
                      href="#"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    <label>Email:</label>
                  </div>
                  <div className="col-md-6">
                    <p>hello@gmail.com</p>
                  </div>
                  <div className="col-md-4">
                    <label>Contact:</label>
                  </div>
                  <div className="col-md-6">
                    <p>12345678</p>
                  </div>
                  <div className="col-md-4">
                    <label>Education:</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Illinois Institute of Technology Graduation Date: June
                      2020 BS in Mechanical Engineering GPA: 3.5/3.9
                    </p>
                  </div>
                  <div className="col-md-4">
                    <label>Experience:</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Engineering Intern Illinois Centerless, Chicago, IL
                      June–August 2019
                    </p>
                  </div>
                  <div className="col-md-4">
                    <label>Projects:</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Laser River Level Gage. Used low-powered laser diode,
                      Raspberry Pi, and 3G LTE Base HAT to construct an
                      inexpensive river-level gauge. Sold and deployed 50+.

                    </p>
                  </div>
                  {/* <div className="col-md-4">
                    <label>Skils:</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Software: MATLAB, AutoCAD, Microsoft Office, SolidWorks
                      Machines: CNC, Lathes
                    </p>
                  </div> */}
                  <div className="col-md-4">
                    <label>Languages:</label>
                  </div>
                  <div className="col-md-6">
                    <p>English, Spanish (fluent)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Employee;
