import axios from 'axios';
import { useState } from "react"
import { useActionData } from "react-router"
import { useSearchParams } from "react-router-dom"

export default function SaveElectionData ()
{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
    const [name, setName] = useState('')
    const [openingDate, setOpeningDate] = useState('')
    const [closingDate, setClosingDate] = useState('')
    const saveDate = (e)=>
    {
        const data = {
			"name":name,
            "country":1,
            "state":1,
            "political_parties":[1],
            "opening_date": openingDate,
            "closing_date":closingDate
		}
        console.log(data)
		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/elections/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      }); 
    }
    return <><div classNameName="ms-5">
        <h3 className='text-center display-6 mt-3 text-decoration-underline'>Add Election</h3>
         <form className='ms-5 ps-5 me-5 pe-5'>
        <div className="mb-3 mt-3">
            <label className="form-label">Election Name:</label>
            <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="mb-3 mt-3">
            <label className="form-label">Opening date</label>
            <input type="date" className="form-control" onChange={(e)=>setOpeningDate(e.target.value)} />
        </div>
        <div className="mb-3 mt-3">
            <label className="form-label">closing date</label>
            <input type="date" className="form-control" onChange={(e)=>setClosingDate(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary"onClick={saveDate}>Submit</button>
    </form>
    </div>
</>
}