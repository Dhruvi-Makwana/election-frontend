import axios from "axios";
import { useState } from "react";
import UpdatePoliticalPartData from "./updatePoliticalParty";
export default function PoliticalPartyListing(props)
{
	const [id, setId] = useState()
	const [isupdated, setUpdate] = useState(false)
	const updatePoliticalParty = (id)=>
	{
		setId(id)
		setUpdate(true)
	}
    const deletePoliticalParty = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/political-party/'+id,{headers})
          .then(function (response) {
            })
            .catch((err) => {
              console.log(err)
        }); 
      };
    return <>
        <tbody className="table table-striped">
            <tr>
                 <td>{props.id}</td>           
                 <td>{props.name}</td>           
                 <td>{props.chairman}</td> 
                 <td>{props.country}</td>
                 <td><img src={props.symbol} height="100px" width="100px" class="rounded-circle" /></td>           
                 <button onClick={() => updatePoliticalParty(props.id)}>Update</button>
                 <button onClick={() => deletePoliticalParty(props.id)}>Delete</button>
            </tr>
        </tbody>
	  	{isupdated && <UpdatePoliticalPartData></UpdatePoliticalPartData>}
    </>
}