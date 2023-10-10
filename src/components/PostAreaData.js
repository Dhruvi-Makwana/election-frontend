import { useState } from "react";
import axios from "axios";
export default function SaveAreaData() {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
    const [areatName, setAreatName] = useState('')
    const [pincode, setPincode] = useState('')
    const saveAddress = (e) =>
    {
        const data = {
            "name": areatName,
            "pincode": pincode,
            "city":5
		}
        
		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/area/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      });   
    }
    return <><div classNameName="ms-5">
         <h3 className='text-center display-6 mt-3 text-decoration-underline'>Add Area:</h3>
         <form className='ms-5 ps-5 me-5 pe-5'>
            <div className="mb-3 mt-3">
                <label className="form-label">name</label>
                <input type="text" className="form-control" onChange={(e) => setAreatName(e.target.value)}/>
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label">pincode</label>
                <input type="text" className="form-control" onChange={(e) => setPincode(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={saveAddress}>Submit</button>
        </form>
        </div>
    </>
}