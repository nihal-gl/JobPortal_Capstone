import React, { useState, useEffect } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./ProfileForm.css"
import { useSelector } from "react-redux";
import { collection,onSnapshot } from "firebase/firestore";

const ProfileForm = () => {
    const {currUserId} = useSelector((state)=> state.users.value);
    const [userData, setUserData] = useState();
    useEffect(()=>{
        onSnapshot(collection(db, 'users'), (users)=>{
            let tempArr = [];
            users.forEach((user)=>{
                if(user.id === currUserId) {
                  setUserData(user.data());
                }
            });
        })
    
    },[])

    const [photo, setPhoto] = useState();
    const [name, setName] = useState();
    const [title, setTitle] = useState();
    const [phone, setPhone] = useState();
    const [exp, setExp] = useState();
    const [edu, setEdu] = useState();
    const [proj, setProj] = useState();
    const [skill, setSkill] = useState();
    const [lang, setLang] = useState();
    const [linkedin, setLinkedin] = useState();
    const [twitter, settwitter] = useState();
    const [github, setGithub] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const profileDetails = {
            photo: photo,
            name: name,
            title: title,
            phone: phone,
            exp: exp,
            edu: edu,
            proj: proj,
            skill: skill,
            lang: lang,
            linkedin: linkedin,
            twitter: twitter,
            github: github
        }

        updateDoc(doc(db, 'users', currUserId), profileDetails).then((res)=>{
            console.log("updated");
        })
        
    }
    return (
        <section className="profile-section">
            <div className="form_data">
                <div className="form_heading">
                    <form>
                        <h2>Add your profile details</h2>
                        <div className="form_input">
                            <label htmlFor="photo">Photograph</label>
                            <input type="text" name="photo" onChange={(e)=>setPhoto(e.target.value)}
                                id="job_id" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name"  onChange={(e)=>setName(e.target.value)}
                                id="name" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="text">Job Title</label>
                            <input type="text" name="email" onChange={(e)=>setTitle(e.target.value)}
                                id="title" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone"  onChange={(e)=>setPhone(e.target.value)}
                                id="phone" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="experience">Experience</label>
                            <input type="text" name="experience"  onChange={(e)=>setExp(e.target.value)}
                                id="experience" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="education">Education</label>
                            <input type="text" name="education"  onChange={(e)=>setEdu(e.target.value)}
                                id="education" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="projects">Projects</label>
                            <input type="text" name="projects"  onChange={(e)=>setProj(e.target.value)}
                                id="projects" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="skills">Skills</label>
                            <input type="text" name="skills"  onChange={(e)=>setSkill(e.target.value)}
                                id="skills" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="languages">Languages</label>
                            <input type="text" name="languages" onChange={(e)=>setLang(e.target.value)}
                                id="languages" /> 
                        </div>
                        <div className="form_input">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input type="text" name="linkedin" onChange={(e)=>setLinkedin(e.target.value)}
                                id="linkedin" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="tweeter">Tweeter</label>
                            <input type="text" name="tweeter" onChange={(e)=>settwitter(e.target.value)}
                                id="tweeter" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="github">Github</label>
                            <input type="text" name="github" onChange={(e)=>setGithub(e.target.value)}
                                id="github" />
                        </div>

                        <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProfileForm