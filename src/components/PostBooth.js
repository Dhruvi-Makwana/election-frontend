import axios from 'axios';
import { useState } from "react"
export default function SaveBoothData()
{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
    const [name, setName] = useState('')
    const saveData = (e)=>
    {
        const data = {
			"name":name,
           "belong_to":5
		}
        console.log(data)
		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/booth/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      }); 
    }
    return <><div classNameName="ms-5">
    <h3 className='text-center display-6 mt-3 text-decoration-underline'>Add Booth:</h3>
         <form className='ms-5 ps-5 me-5 pe-5'>
        <div className="mb-3 mt-3">
            <label for="email" className="form-label">Enter Booth name</label>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveData}>Submit</button>
    </form>
    </div>
</>
}