import axios from "axios";
import { useState } from "react";
export default function SaveVote() {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 'content-type': 'multipart/form-data' };
  const [vote, setVote] = useState(false)
  const saveVote = (e) => {
    setVote(true)
    const data = {
      "machine": 5,
      "voter": 1,
      "vote": vote
    }

    e.preventDefault(e);
    axios.post('http://127.0.0.1:8000/en/api/v1/vote/', data, { headers })
      .then(function (response) {
      })
      .catch((err) => {
        console.log(err)
      });
  }
  return <><div className="ms-5">
    <h3 className='text-center display-7 mt-3 text-decoration-underline'>Click on button to gave a vote</h3>
    <form className='ms-5 ps-5 me-5 pe-5'>
      <button onClick={saveVote}>Vote</button>
    </form>
  </div>
  </>
}