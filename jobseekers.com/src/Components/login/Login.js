import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signimg from '../signup/Signimg'
import './login.css';


const Login = () => {

    const [inputval, setInputval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inputval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInputval(() => {
            return {
                ...inputval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inputval;
        if (email === "") {
            alert('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            alert('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            alert('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            alert('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))


                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3 loginContainer">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign in</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "#92B4EC" }} type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                    <Signimg></Signimg>
                </section>

            </div>
        </>
    )
}

export default Login