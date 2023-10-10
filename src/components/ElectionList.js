import axios from "axios";
export default function ElectionListing(props)
{
    const deleteElection = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/elections/'+id,{headers})
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
                <td>{props.opening_date}</td>    
                <td>{props.closing_date}</td> 
                <td><button>Edit</button></td>
                <button onClick={() => deleteElection(props.id)}>Delete</button>
            </tr>
        </tbody>
    </>
}