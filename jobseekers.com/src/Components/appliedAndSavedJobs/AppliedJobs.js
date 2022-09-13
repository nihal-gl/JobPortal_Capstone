import { useState, useEffect } from "react";
import { onSnapshot, collection, doc, arrayUnion, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faIndianRupeeSign, faLocationDot, faFileLines, faClockRotateLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import './AppliedJobs.css';
import NavbarJobList from "../jobListing/navbarJobList/NavbarJobList";

const AppliedJobs = () => {
    const { currUserId } = useSelector((state) => state.users.value); // use this to get the current user's id
    const [data, setData] = useState([]);
     
    //fetch
    let tempArr = [];
    useEffect(() => {
        onSnapshot(collection(db, 'users'), (users) => {
            users.forEach((user) => {
                if (user.id === currUserId)
                tempArr.push(...user.data().appliedJobs)
            });
        })
        onSnapshot(collection(db, 'jobs'), (totalJobs) => {
            let arr = [];
            totalJobs.forEach((item) => {
                tempArr.forEach(job => {
                    if (item.id === job) {
                        arr.push(item.data());
                    }
                });
            }) 
            setData(arr);
        })
    }, [tempArr])

    const calculateTime = (time) => {
        const givenTime = new Date(time);
        const currTime = new Date(Date.now())  
        const diffDays = parseInt((currTime - givenTime) / (1000 * 60 * 60 * 24), 10);
        return diffDays;
    }
    const handleSaveJobs = (jobId) => {
        console.log("save to be implemented");
        updateDoc(doc(db, 'users', currUserId), {
            savedJobs: arrayUnion(jobId)
        }).then((res)=>{
            console.log("job added to saved job array");
        }).catch((err)=> {
            console.log(err);
        }) 
    }

    return (
       <>
       <NavbarJobList></NavbarJobList>
        <div className="applied-job-parent-container">
            <h1>applied job</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map((item) => (
                            <div className="card col-6 applied-job-card">
                                <div className="card-body">
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
                                    <div className='history-save'>
                                        <div className='history'>
                                            <FontAwesomeIcon icon={faClockRotateLeft} />

                                            <span>
                                                {calculateTime(item.postedOn)} DAYS AGO
                                            </span>
                                        </div>
                                        <div className='save' onClick={() => handleSaveJobs(item.id)}>
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
       </>
    )
}
export default AppliedJobs