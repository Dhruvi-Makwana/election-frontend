import axios from "axios";
import { useState } from "react";
import UpdateAddressData from "./updateAdress";
export default function AddressListing(props)
{
  const [id, setId] = useState()
  const [isupdate, setUpdate] = useState(false)
  const updateAddress = (id) =>
  {
    setId(id)
	setUpdate(true)
  }
    const deleteAddress = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/address/'+id,{headers})
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
                <td>{props.street_name}</td>    
                <td>{props.area}</td>
                <td>{props.city}</td>
                <td>{props.state}</td>    
                <td>{props.country}</td>
                <td>{props.pincode}</td>
                <button onClick={() => updateAddress(props.id)}>Update</button>
                <button onClick={() => deleteAddress(props.id)}>Delete</button>
            </tr>
        </tbody>
	{isupdate && <UpdateAddressData></UpdateAddressData>}
    </>
}