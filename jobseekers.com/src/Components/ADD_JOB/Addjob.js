import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { db } from '../../firebase/config'; 
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
const Addjob = () => {

    const [inputval, setInputval] = useState({
        title: "",
        company: "",
        ctc: "",
        exp: "",
        desc: "",
        location: ""
      }
      )
      console.log(inputval)
    
    
      const getdata = (e) => {
        const { value, name } = e.target;
    
        setInputval(() => {
          return {
            ...inputval,
            [name]: value
          }
        })
    
      }
      const handleSubmit =  async (e) => {
        e.preventDefault();
        const { title, company, ctc, exp, desc, location } = inputval;
        const res = await addDoc(collection(db, "jobs"), {
            title: title,
            company: company,
            ctc: ctc,
            exp: exp,
            desc: desc,
            location: location
        });
      }
    
  return (
    <div className="container mt-8 signup">
        <section className='d-flex justify-content-between'>
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Add new job</h3>
            <Form >
                <Form.Group className="mb-3 col-lg-6" >
                <label>Job Title</label>
                <Form.Control type="text" onChange={getdata} name='title' placeholder="Enter Job Title" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" >
                <label>Company</label>
                <Form.Control type="text" onChange={getdata} name='company' placeholder="Enter Company Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" >
                <label>CTC</label>
                <Form.Control type="text" onChange={getdata} name='ctc' placeholder="Enter expected compensation" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" >
                <label>Experience</label>
                <Form.Control type="text" onChange={getdata}  name='exp' placeholder="Enter minimum experience for the candidate" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" >
                <label>Description</label>
                <Form.Control type="text" onChange={getdata}  name='desc' placeholder="Enter Job Description" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" >
                <label>Location</label>
                <Form.Control type="text" onChange={getdata} name='location' placeholder="Enter Job Location" />
              </Form.Group>
              <Button variant="primary" className='col-lg-6' onClick={handleSubmit} style={{ background: "#92B4EC" }} type="submit">
                Add Job
              </Button>
            </Form>
          </div>
        </section>

      </div>
  )
}

export default Addjob