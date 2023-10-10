import { useState } from "react";
import axios from "axios";
import UpdateBoothData from "./updateBooth";
export default function BoothListing(props)
{
	const [id, setId] = useState()
	const [updated, setUpdated] = useState(false)
	const updateBooth =(id)=>
	{
		setId(id)
		setUpdated(true)
	}
    const deleteBooth = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/booth/'+id,{headers})
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
                <td>{props.area}</td>    
                <td>{props.city}</td>    
                <td>{props.pincode}</td>
                <td>{props.state}</td> 
                <button onClick={() => updateBooth(props.id)}>Update</button>
                <button onClick={() => deleteBooth(props.id)}>Delete</button>
                               
            </tr>
        </tbody>
		{updated && <UpdateBoothData></UpdateBoothData>}
    </>
}