import axios from 'axios';
import { useState } from 'react';
export default function SavePoliticalPartyData ()
{
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('')
    const getName = (e)=>
    {
        setName(e.target.value)
    }
    const savePoliticalParty = (e) =>
    {
        const data = {
			"name":name,
            "symbol":symbol,
            "country":1,
            "chairman":1
		}
        
		e.preventDefault(e);
		axios.post('http://127.0.0.1:8000/en/api/v1/political-party/', data,{headers})
		.then(function (response) {
		  })
      	.catch((err) => {
			console.log(err)
      });   
    }
    return <><div className="ms-5">
   <h3 className='text-center display-6 mt-3 text-decoration-underline'>Add Political Party:</h3>
         <form className='ms-5 ps-5 me-5 pe-5'>
        <div className="mb-3 mt-3">
            <label  className="form-label">name</label>
            <input type="text" className="form-control" onChange={getName}/>
        </div>
        <div className="mb-3 mt-3">
            <label  className="form-label">symbol</label>
            <input type="file" className="form-control" onChange={(e)=>{setSymbol(e.target.files[0])}}/>
        </div>
        
        <button onClick={savePoliticalParty}>Submit</button>
    </form>
    </div>
</>
}