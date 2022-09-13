import React, { useState, useEffect } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./UpdateJobs.css"
import { useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
const UpdateJobs = () => {
    const { currUserId } = useSelector((state) => state.users.value);
    const param = useParams();
    const [company, setCompany] = useState();
    const [ctc, setCtc] = useState();
    const [desc, setDesc] = useState();
    const [exp, setExp] = useState();
    const [location, setLocation] = useState();
    const [title, setTitle] = useState();
    
    
    useEffect(() => {
        onSnapshot(collection(db, 'jobs'), (users) => {
            // let tempArr = [];
            users.forEach((user) => {
                if (user.id === param.id) {
                    setTitle(user.data().title);
                    setCompany(user.data().company);
                    setCtc(user.data().ctc);
                    setDesc(user.data().desc);
                    setExp(user.data().exp);
                    setLocation(user.data().location);    
                }
            });
        })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const jobDetails = {
            title: title,
            exp: exp,
            company:company,
            ctc:ctc,
            desc:desc,
            location:location
        }

        updateDoc(doc(db, 'jobs', param.id), jobDetails).then((res) => {
            console.log("updated");
        }).catch((err)=>{
            console.log(err.message);
        })

    }
    return (
        <section className="profile-section">
            {
                <div className="form_data">
                    <div className="form_heading">
                        <form>
                            <h2>Update job details</h2>
                            
                            <div className="form_input">
                                <label htmlFor="text">Job Title</label>
                                <input type="text" name="email" onChange={(e) => setTitle(e.target.value)}
                                    value={title} id="title" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="text">Company</label>
                                <input type="text" name="email" onChange={(e) => setCompany(e.target.value)}
                                    value={company} id="company" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="text">Description</label>
                                <input type="text" name="email" onChange={(e) => setDesc(e.target.value)}
                                    value={desc} id="desc" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="text">Experience</label>
                                <input type="text" name="email" onChange={(e) => setExp(e.target.value)}
                                    value={exp} id="exp" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="text">CTC</label>
                                <input type="text" name="email" onChange={(e) => setCtc(e.target.value)}
                                    value={ctc} id="ctc" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="text">Location</label>
                                <input type="text" name="email" onChange={(e) => setLocation(e.target.value)}
                                    value={location} id="location" />
                            </div>
                            
                            <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            }

        </section>
    )
}

export default UpdateJobs