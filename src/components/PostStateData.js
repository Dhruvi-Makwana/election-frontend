import { useState } from "react"
import HomeDesign from './homeDesign';
import axios from 'axios';

export default function SaveStateData() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") };
    const [name, setName] = useState('')
    const Getname = (e) =>
    {
        setName(e.target.value)
    }
    const SubmitForm = (e)=>
    {
        const data = {
			"name":name,
		}
        
		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/state/', data,{headers})
		.then(function (response) {
			<HomeDesign></HomeDesign>
		  })
      	.catch((err) => {
			console.log(err)
      });   
    }
    return <>
    <div classNameName="ms-5">
    <h3 className='text-center display-6 mt-3 text-decoration-underline'>Add State:</h3>
    <form className='ms-5 ps-5 me-5 pe-5'>
            <div className="mb-3 mt-3">
                <label className="form-label">Enter State Name:</label>
                <input type="name" className="form-control" onChange={Getname}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={SubmitForm}>Submit</button>
        </form>
        </div>
    </>
}