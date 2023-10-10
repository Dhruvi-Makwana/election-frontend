import { useState } from "react";
import axios from "axios";
export default function SaveAddressData()
{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
    const [StreetName, setStreetName] = useState('')
    const saveAddress = (e) =>
    {
        const data = {
			"street_name":StreetName,
            "area": 5,
            "country": 1
		}
        
		e.preventDefault(e);
        console.log(StreetName)
		axios.post('http://127.0.0.1:8000/en/api/v1/address/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      });   
    }
    return <>
    <div classNameName="ms-5">
    <h3 className='text-center display-6 mt-3 text-decoration-underline'>Add Address:</h3>
         <form className='ms-5 ps-5 me-5 pe-5'>
        <div className="mb-3 mt-3">
            <label className="form-label">Street name</label>
            <input type="text" className="form-control" onChange={(e)=>setStreetName(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveAddress}>Submit</button>
    </form>
    </div>
</>
}