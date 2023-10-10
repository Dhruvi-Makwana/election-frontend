import axios from "axios";
import { useState } from "react";
import UpdateDataState from "./updateState";
export default function StateListing(props)
{
	const [isUpdate, setIsUpdate] = useState(false)
	const [id, setID] = useState()
	const SendData = (id) =>
	{
		setIsUpdate(true)
		setID(id)
	}

    const deleteState = (id) => {
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/state/'+id,{headers})
          .then(function (response) {
            })
            .catch((err) => {
              console.log(err)
        }); 
      };
    return <>
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>  
                <button className="me-2" onClick={() => SendData(props.id)}>Edit</button>
                <button className="me-2" onClick={() => deleteState(props.id)}>Delete</button>
            </tr>
        </tbody>
		{isUpdate && <UpdateDataState id={id}></UpdateDataState>}
    </>
}