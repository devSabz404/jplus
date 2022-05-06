import { info } from "autoprefixer"
import axios from "axios"
import { useState } from "react"

export default function Callback(){
//console.log(props)
const [info,setinput] = useState()
async function submitInput(){
    // await axios({
    //     method: 'post',
    //     url:'./api/payment/callback',
    //     data:info,
    // })
 await fetch('./api/payment/callback', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(info),
})
}
    return(
        <>
        <form onSubmit={submitInput}>
            <input onChange={(e)=>setinput(e.target.value)} type="text" />
            <button type="submit">submit</button>
        </form>
       
        </>
    )
} 

