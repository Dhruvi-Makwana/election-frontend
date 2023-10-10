import axios from "axios";
export default function EvmMachineListing(props)
{
    const deleteEvmMachine = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/evm-machine/'+id,{headers})
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
                <td><button>Edit</button></td>
                <button onClick={() => deleteEvmMachine(props.id)}>Delete</button>
                {/* <td>{props.area}</td>    
                <td>{props.city}</td>    
                <td>{props.pincode}</td>
                <td>{props.state}</td>  */}
                               
            </tr>
        </tbody>
    </>
}