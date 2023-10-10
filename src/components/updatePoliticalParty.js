import axios from "axios";
import { useState } from "react";
export default function UpdatePoliticalPartData(props)
{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") };
    const [name, setName] = useState('')
    const SubmitForm = (e)=>
    {
        const data = {
			"name":name,
		} 
		e.preventDefault(e);
		axios.put('http://127.0.0.1:8000/en/api/v1/political-party/'+props.id+'/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      });   
    }
    return <>
    <div classNameName="ms-5">
        <form>
            <div className="mb-3 mt-3">
                <label className="form-label">name</label>
                <input type="name" className="form-control" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <button type="submit" onClick={SubmitForm}>Submit</button>
        </form>
        </div>
    </>
}