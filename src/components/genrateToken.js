import axios from 'axios';
import { useState } from 'react'
const AccessToken = ()=>
{
    
    const data = {
        "refresh": localStorage.getItem("refresh_token")
    }
    axios.post('http://127.0.0.1:8000/en/api/v1/token/refresh/', data)
    .then(function (response) {
        localStorage.setItem("access_token",response.data["access"])
        console.log(response)
      })
    .catch((err) => {
       console.log(err)
    });
}
export default AccessToken