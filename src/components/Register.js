import './Registration.css'
import { useState } from 'react'
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function Registrations()
{
	const navigate = useNavigate();
	const [username, setUsername] = useState('')
	const [passoword, setPassword] = useState('')
	const [confirmPassword, setConfirmPassoword] = useState('')
	const [dob, setdob] = useState('')
	const [living_from, setliving_from] = useState('')
	const [email, setEmail] = useState('')
	// variables for error messages

	const [usernameError, setUserError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [dobError, setDobError] = useState('')
	const [livingFromError, setLivingFromError] = useState('')
	const [emailError, setemailError] = useState('')

	const getUsername = (e)=>
	{
		setUsername(e.target.value)
	}
	const getPassword = (e) =>
	{
		setPassword(e.target.value)
	}
	const getResetPassword = (e) =>
	{
		setConfirmPassoword(e.target.value)
	}	
	const getDOB = (e) =>
	{
		setdob(e.target.value)
	}
	const getLivingFrom = (e)=>
	{
		setliving_from(e.target.value)
	}
	const getEmail = (e) =>
	{
		setEmail(e.target.value)
	}
	const saveData = (e) =>
	{
		const data = {
			"username":username,
			"email":email,
			"password":passoword,
			"confirm_password":confirmPassword,
			"nationality":1,
			"date_of_birth":dob,
			"living_from":living_from
		}

		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/register/', data)
		.then(function (response) {
			console.log(response);
			navigate('/login');
		  })
      	.catch((err) => {
			setUserError(err.response["data"].username) 
			if(email === ''){
				setemailError("Enter email address")
			}
			if(passoword === '')
			{
				setPasswordError('please enter a password')
			}
			else
			{
				setPasswordError("password does't match")
			}
			if (dob === '')
			{
				setDobError('please select date')
			}
			if (living_from === '')
			{
				setLivingFromError('please select date')
			}

      });
	}
    return <>
    <section className="h-100 bg-dark">
		<div className="container py-5 h-100">
			<div className="row d-flex justify-content-center align-items-center h-100">
			<div className="col">
				<div className="card card-registration my-4">
				<div className="row g-0">
					<div className="col-xl-6 d-none d-xl-block">
					<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
						alt="Sample photo" className="img-fluid"
						style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
					</div>
					<div className="col-xl-6">
					<div className="card-body p-md-5 text-black">
						<h3 className="mb-5 text-uppercase ms-5">Registration form</h3>

						<div className="row">
						<div className="col-md-6 mb-4">
							<div className="form-outline">
							<label className="form-label">Username</label>
							<input type="text" className="form-control form-control-lg" onChange={getUsername} />
							{usernameError && (
  								<p className="error"> {usernameError} </p>
							)}
							</div>
						</div>
						</div>

						<div className="row">
						<div className="col-md-6 mb-4">
							<div className="form-outline">
							<label className="form-label">password</label>
							<input type="password" id="form3Example1m1" className="form-control form-control-lg" onChange={getPassword} />
							{passwordError && (
  								<p className="error"> {passwordError} </p>
							)}
							</div>
						</div>
						<div className="col-md-6 mb-4">
							<div className="form-outline">
							<label className="form-label">Confirm Passowrd</label>
							<input type="password" className="form-control form-control-lg" onChange={getResetPassword}/>
							
							</div>
						</div>
						</div>
						<div>
							<input type='hidden' value='1'></input>
						</div>
						<div className="form-outline mb-4">
						<label className="form-label">DOB</label>
						<input type="date" className="form-control form-control-lg" onChange={getDOB} />
						{dobError && (
  								<p className="error"> {dobError} </p>
							)}
						</div>

						<div className="form-outline mb-4">
						<label className="form-label">Living From:</label>
						<input type="date" className="form-control form-control-lg" onChange={getLivingFrom}/>
						{livingFromError && (
  								<p className="error"> {livingFromError} </p>
							)}
						</div>

						<div className="form-outline mb-4">
						<label className="form-label">Email ID</label>
						<input type="email" id="form3Example97" className="form-control form-control-lg" onChange={getEmail}/>
						{emailError && (
  								<p className="error"> {emailError} </p>
							)}
						</div>

						<div className="d-flex justify-content-end pt-3">
						<button type="button" className="btn btn-warning btn-lg ms-2" onClick={saveData}>Submit</button>
						</div>
						<div>
							<h6>Alredy a user <Link to="/login">Login</Link></h6>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
	</section>
    </>
}