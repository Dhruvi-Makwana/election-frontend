import axios from "axios";
export default function Listing(props) {
  
    return (
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.username}</td>
          <td>{props.DOB}</td>
          <td>{props.livin_from}</td>
         
        </tr>
      </tbody>
    );
  }
  