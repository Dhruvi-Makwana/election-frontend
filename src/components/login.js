import './Registration.css'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function Login() {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validation, setValidation] = useState('')
    const getUsername = (e) => {
        return setUsername(e.target.value)
    }
    const getPassword = (e) => {
        return setPassword(e.target.value)
    }
    
    const login_data = (e) => {
        const data = {
            "username": username,
            "password": password
        }
        e.preventDefault();
		axios.post('http://127.0.0.1:8000/en/api/v1/login/', data)

		.then(function (response) {
           
            localStorage.setItem("access_token",response.data["access token"])
            localStorage.setItem("refresh_token",response.data["refresh token"])
			navigate('/home');
		  })
          
        .catch((err) => {
            setValidation(err.response["data"])
        });
        
    }
    return <>
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase ms-5">Login form</h3>
                                        <div className="row">
                                            <div className="col mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control form-control-lg" onChange={getUsername} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">password</label>
                                                    <input type="password" className="form-control form-control-lg" onChange={getPassword} />
                                                </div>
                                                <div className="d-flex justify-content-end pt-3">
                                                    <button type="button" className="btn btn-warning btn-lg" onClick={login_data}>Login</button>
                                                </div>
                                                {validation && (
  								                    <p className="error"> {validation} </p>
							                    )}
                                                <h6>No Account? Click here to<Link to="/register">Register</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 d-none d-xl-block">
                                <img src="https://www.bpmcdn.com/f/files/kelowna/import/2022-09/30400037_web1_voting-stock-copy--1-.jpg"
                                alt="Sample photo" className="img-fluid"
                                style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', height:'100%' }} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}