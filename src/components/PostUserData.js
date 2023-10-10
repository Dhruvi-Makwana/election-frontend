import { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import HomeDesign from './homeDesign';
import './form.css'

export default function SaveUserData() {
    const navigate = useNavigate(); 
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dob, setDob] = useState('')
    const [living_from, setLivingFrom] = useState('')
    const Getemail = (e) =>
    {
        setEmail(e.target.value)
    }
    const GetUsername = (e) =>
    {
        setUsername(e.target.value)
    }
    const GetPassword = (e) =>
    {
        setPassword(e.target.value)
    }
    const GetConfirmPassword = (e) =>
    {
        setConfirmPassword(e.target.value)
    }
    const GetDob = (e) =>
    {
        setDob(e.target.value)
    }
    const GetLivingFrom = (e) =>
    {
        setLivingFrom(e.target.value)
    }
    const SubmitForm = (e) =>
    {
        const data = {
			"username":username,
			"email":email,
			"password":password,
			"confirm_password":confirmPassword,
			"nationality":1,
			"date_of_birth":dob,
			"living_from":living_from
		}

		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/register/', data)
		.then(function (response) {
			<HomeDesign></HomeDesign>
		  })
      	.catch((err) => {
            debugger
			console.log(err)
      });
    }


    return <><div className="middle_data_show">
        <h3 className='text-center display-6 mt-3 text-decoration-underline'>User Form</h3>
        <form className='ms-5 ps-5 me-5 pe-5'>
        <div className="mb-3 mt-3 ">
                <label className="form-label">Username</label>
                <input type="text" className="form-control"  placeholder="Enter username" onChange={GetUsername}/>
            </div>
            <div className="mb-3 mt-3">
                <label  className="form-label">Email:</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={Getemail} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={GetPassword}/>
            </div>
            <div className="mb-3">
                <label for="pwd" className="form-label">Reset Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={GetConfirmPassword} />
            </div>
            <div className="mb-3">
                <label for="pwd" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" placeholder="Enter date of birth" onChange={GetDob}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Living From </label>
                <input type="date" className="form-control" onChange={GetLivingFrom} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={SubmitForm}>Submit</button>
        </form>
        </div>
    </>
}