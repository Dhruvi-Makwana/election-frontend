import axios from "axios";
import { useState } from "react";
import UpdateDataArea from "./updateArea";
export default function AreaListing(props)
{
	const [id, setId] = useState()
	const [isupdate, setUpdat]  =useState(false)
	const updateArea = (id)=>
	{
		setUpdat(true)
		setId(props.id)
	}
    const deleteArea = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/area/'+id,{headers})
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
                <td>{props.state}</td> 
                <td>{props.pincode}</td>               
                <button onClick={() => updateArea(props.id)}>Update</button>
                <button onClick={() => deleteArea(props.id)}>Delete</button>
            </tr>
        </tbody>
		{isupdate && <UpdateDataArea id={id}></UpdateDataArea>}

    </>
}