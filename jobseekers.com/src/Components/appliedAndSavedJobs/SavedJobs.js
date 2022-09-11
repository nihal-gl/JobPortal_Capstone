import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";

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

    return (
        <div className="saved-job-parent-container">
            <h1>Saved job</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map((item) => (
                            <div className="card">
                                <div className="card-body">
                                    <h1>{item.title}</h1>
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