import './JobsAdmin.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faIndianRupeeSign, faLocationDot, faFileLines, faClockRotateLeft, faStar } from '@fortawesome/free-solid-svg-icons'
// import data from '../../jobs.json'
import { collection, onSnapshot, doc, setDoc, deleteDoc,updateDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const JobsAdmin = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const {currUserId} = useSelector((state)=>state.users.value); // use this to get the current user's id
    console.log(currUserId);

    useEffect(()=>{
        const unsub = onSnapshot(collection(db, 'jobs'), (querySnapshot)=>{
            let tempArr = [];
            querySnapshot.forEach((item)=>{
                tempArr.push({...item.data(), id: item.id})
            });
            setJobs(tempArr);
        })

    },[])

    const handleAddJob = (e)=>{
        navigate('/addjob')
    }

    const handleDelete = (id) => {
        deleteDoc(doc(db, 'jobs', id)).then((res)=>{
            alert("job has been deleted");
        })
    }

    const handleUpdate = (id) => {
        navigate('/updatejob')
    }

    //used for setting the filters
    const [experience, setExperience] = useState(10);
    const [salaryRadio, setSalaryRadio] = useState("all");
    const [location, setLocation] = useState("all");

    const handleSaveJobs = (e) => {
        console.log("save to be implemented");
    }

    //utility functions
    const calculateTime = (time) => {
        const givenTime = new Date(time);
        const currTime = new Date(Date.now())
        const diffDays = parseInt((currTime - givenTime) / (1000 * 60 * 60 * 24), 10);
        return diffDays;
    }

    //Filtering functions
    const handleExperience = (e) => {
        setSalaryRadio("all"); // setting initial value for radio btn i.e., all
        setLocation("all"); // setting initial value of location i.e., all

        setExperience(e.target.value);
        const filteredJob = jobs.filter((item) => parseInt(item.exp, 10) <= e.target.value);
        console.log(filteredJob);
        setJobs(filteredJob);
    }
    const handleLocation = (e, key) => {
        setSalaryRadio("all"); // setting initial value for radio btn i.e., all
        setExperience(10);  // setting initial value for experience to 10

        if (key === 'remote') {
            const filteredJob = jobs.filter((item) => item.location[0] === 'Remote')
            console.log(filteredJob);
            setJobs(filteredJob);
        } else if (key === 'office') {
            const filteredJob = jobs.filter((item) => item.location[0] !== 'Remote')
            console.log(filteredJob);
            setJobs(filteredJob);
        } else if (key === 'all') {
            setJobs(jobs);
        }
    }
    const handleCheckBox = (e, key) => {
        setExperience(10);  // setting initial value for experience
        setLocation("all"); // setting initial value of location i.e., all

        if (e.target.checked) {
            if (key === "0to3") {
                const filterJob = jobs.filter((item) => item.ctc <= 3)
                setJobs(filterJob);
                setSalaryRadio(key);
            }
            if (key === "3to5") {
                //item.ctc === 0 --> not disclosed, between 3 and 5
                const filterJob = jobs.filter((item) => (item.ctc >= 3 && item.ctc <= 5) || item.ctc == 0)
                setJobs(filterJob);
                setSalaryRadio(key);
            }
            if (key === "5to10") {
                //item.ctc === 0 --> not disclosed, between 5 and 10
                const filterJob = jobs.filter((item) => (item.ctc >= 5 && item.ctc <= 10) || item.ctc == 0)
                setJobs(filterJob);
                setSalaryRadio(key);
            }
            if (key === "10to15") {
                //item.ctc === 0 --> not disclosed, between 10 and 15
                const filterJob = jobs.filter((item) => (item.ctc >= 10 && item.ctc <= 15) || item.ctc == 0)
                setJobs(filterJob);
                setSalaryRadio(key);
            }
            if (key === "15plus") {
                //item.ctc === 0 --> not disclosed
                const filterJob = jobs.filter((item) => item.ctc >= 15 || item.ctc == 0)
                setJobs(filterJob);
                setSalaryRadio(key);
            }
            if (key === 'all') {
                setJobs(jobs);
                setSalaryRadio(key);
            }
        } else {
            setJobs(jobs);
        }
    }

    const viewApplicants = (id) => {
        navigate('/applicants/'+id);
    }

    return (
        <div className='container'>
            <button className='btn btn-primary'>SHOW JOB LIST</button>
            <button className='btn btn-primary' onClick={handleAddJob}>ADD A JOB</button>
            <button className='btn btn-primary' >SHOW USERS LIST</button>
            <div className='joblisting'>
                <div className="card-container container  ">
                    <div className="row">
                        {
                            jobs.map((item) => (
                                <div className="card job-listing-card">
                                    <div className='card-body'>
                                        <h4 className='job-title'>{item.title}</h4>
                                        <p className='company-name'>{item.company}</p>
                                        <ul className='card-list'>
                                            <li>
                                                <FontAwesomeIcon icon={faBriefcase} />
                                                {/* always write years, no plus symbol in json */}
                                                <span>{item.exp}+ Yrs</span>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faIndianRupeeSign} />
                                                {/* always write numbers, lpa will not be added in json */}
                                                <span>{item.ctc > 0 ? item.ctc + " LPA" : "Not disclosed"}</span>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                                {/* only 2 locations are permitted in json*/}
                                                <span>{item.location}</span>
                                            </li>
                                        </ul>

                                        <FontAwesomeIcon icon={faFileLines} />
                                        <span>{item.desc}</span>
                                        <br />
                                        <button className='btn btn-primary apply-btn' onClick={()=>handleUpdate(item.id)}>Update</button>
                                        <button className='btn btn-success apply-btn' onClick={()=>viewApplicants(item.id)}>View Applicants</button>
                                        <button className='btn btn-danger apply-btn'onClick={()=>handleDelete(item.id)}>Delete</button>
                                        <div className='history-save'>
                                            <div className='history'>
                                                <FontAwesomeIcon icon={faClockRotateLeft} />

                                                <span>
                                                    {calculateTime(item.postedOn)} DAYS AGO
                                                </span>
                                            </div>
                                            <div className='save' onClick={(e) => handleSaveJobs(e, item.id)}>
                                                <FontAwesomeIcon icon={faStar} className="icon" />
                                                <span>Save</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                   
                    </div>
                </div>
            </div>

            

        </div>
    )
}
export default JobsAdmin;