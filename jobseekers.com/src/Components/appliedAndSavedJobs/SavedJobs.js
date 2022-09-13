import { useState, useEffect } from "react";
import { onSnapshot, collection, updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faIndianRupeeSign, faLocationDot, faFileLines, faClockRotateLeft, faRemove, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import './SavedJobs.css';
const SavedJobs = () => {
    const { currUserId } = useSelector((state) => state.users.value); // use this to get the current user's id
    const [data, setData] = useState([]);

    //fetch
    let tempArr = [];
    useEffect(() => {
        onSnapshot(collection(db, 'users'), (users) => {
            users.forEach((user) => {
                if (user.id === currUserId)
                    tempArr.push(...user.data().savedJobs)
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
    const handleApply = (jobId) => {
        // add job id in users collection
        updateDoc(doc(db, 'users', currUserId), {
            appliedJobs: arrayUnion(jobId)
        }).then((res)=>{
            console.log("job added to current user");
        }).catch((err)=> {
            console.log(err);
        }) 
        // add user id in jobs collection
        updateDoc(doc(db, 'jobs', jobId), {
            applicants: arrayUnion(currUserId)
        }).then((res)=>{
            console.log("applicant added to current job");
        }).catch((err)=> {
            console.log(err);
        }) 
    }
    const removeJob = () => {
        console.log("remove job to be implemented");
    }

    return (
        <div className="saved-job-parent-container">
            <h1>Saved job</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map((item) => (
                            <div className="card saved-job-card">
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
                                    <button onClick={()=>handleApply(item.id)} className='btn btn-primary apply-btn'>Apply</button>
                                    <div className='history-save'>
                                        <div className='history'>
                                            <FontAwesomeIcon icon={faClockRotateLeft} />

                                            <span>
                                                {calculateTime(item.postedOn)} DAYS AGO
                                            </span>
                                        </div>
                                        <div className='history' onClick={()=>removeJob()}>
                                            <FontAwesomeIcon icon={faRemove} />
                                            <span>Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default SavedJobs