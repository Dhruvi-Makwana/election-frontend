import axios from "axios";
export default function VoteListing(props)
{
    const deleteVote = (id) => {
        console.log(id);
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"),};
          axios.delete('http://127.0.0.1:8000/en/api/v1/vote/'+id,{headers})
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
                 <td>{props.username}</td>           
                 <td>{props.vote}</td>
                 <td><button>Edit</button></td>
                 <button onClick={() => deleteVote(props.id)}>Delete</button>
            </tr>
        </tbody>

    </>
}