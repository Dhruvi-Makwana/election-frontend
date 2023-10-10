import axios from "axios";
import { useState } from "react";
export default function SaveEvmMachineData ()
{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
   
    const saveDate = (e)=>
    {
        const data = {
			"belong_to": [4]
		}
        console.log(data)
		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/evm-machine/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      }); 
    }
    return <><div classNameName="ms-5">
    <form>
        <div className="mb-3 mt-3">
            <label className="form-label">belong to</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveDate}>Submit</button>
    </form>
    </div>
</>
}