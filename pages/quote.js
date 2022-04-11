import Nav from "../frontie/Navbar";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import excuteQuery from "../lib/db";
import axios from "axios";
import {useDispatch } from 'react-redux';
import{
  setName,setNumber,setReferall,
  setRegistration,setEmail,setSum,setVehicleclass,setCoverage,setPeriod,setProductDetail
} from '../features/counterSlice'


function Month(){
  const periods=[
    {id:1,duration:'1 Week'},
    {id:2,duration:'2 Weeks'},
    {id:3,duration:'1 Month'},
    {id:4,duration:'1 Year'}
   
   ]

   return(
     periods.map((item,index)=>
     <option key={index} value={item.duration}>{item.duration}</option>
     )
   )
}

function MonthYear(){
  const periods=[
    
    {id:1,duration:'1 Month'},
    {id:2,duration:'1 Year'}
   
   ]

   return(
     periods.map((item,index)=>
     <option key={index} value={item.duration}>{item.duration}</option>
     )
   )
}

function Year(){
  const periods=[
   
    {id:1,duration:'1 Year'},
   ]

   return(
     periods.map((item,index)=>
     <option key={index} value={item.duration}>{item.duration}</option>
     )
   )
}

const Quote = ({motovehicle,motocycle,tricycle,covera}) =>{
 

  const dispatch = useDispatch();
  const router =useRouter()
  const cov = covera.map((item)=>item);
  const mv = motovehicle.map((item)=>item);
  const mc = motocycle.map((item)=>item);
  const tr = tricycle.map((item)=>item);



    

  

 


const [myName,setMyname]= useState()
const [phoneNumber,setPhoneNumber]= useState()
const [registration,setMyRegistration]= useState()
const [referall,setMyReferall]= useState(312312)
const [myEmail,setMyEmail]= useState()
const [vclass,setMyVclass]= useState()
const [cover,setMyCover]= useState()
const [coverPeriod,setCoverPeriod]= useState()
const [sumInsured,setMySuminsured] = useState()
const [passengers,setPassenger] = useState()
const [tonnage,setTonnage] = useState()
const [yom,setYom] = useState()




async function handleSubmit(e){

  e.preventDefault()
  


  const  data = {myName,myEmail,phoneNumber,yom,registration,referall,vclass,cover,coverPeriod,sumInsured,passengers,tonnage}

  dispatch(setName(myName));
    dispatch(setNumber(phoneNumber));
    dispatch(setReferall(referall));
    dispatch(setRegistration(registration));
    dispatch(setEmail(myEmail));
    dispatch(setVehicleclass(vclass));
    dispatch(setCoverage(cover));
    dispatch(setPeriod(coverPeriod));
    dispatch(setSum(sumInsured));
  
  
  const res = await axios.post('./api/quote',data,

  )
  if (res.status === 200){
    console.log('Ok',res.data)
    

    dispatch(setProductDetail(res.data.otherdata));
    router.push('/pick')
  }else{
    console.log("not ok")
  }
 }
//  useEffect(async ()=>{
//   const res = await axios.get('http://localhost/jendie/time.php')
//   if (res.status === 200){
//     console.log('Ok')
//   }else{
//     console.log("not ok")
//   }}
// ,[])




    return(
        <>
        <Nav/>
        <div className="container mx-auto px-5 ">
        <div className="flex flex-row  justify-center mt-5">

    <form onSubmit={handleSubmit} className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Full Name
      </label>
      <input  onChange={(e)=>setMyname(e.target.value)}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Phone number
      </label>
      <input onChange={(e)=>setPhoneNumber(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Phone"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Email
      </label>
      <input onChange={(e)=>setMyEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="email" type="email" placeholder="Email"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Registration
      </label>
      <input onChange={(e)=>setMyRegistration(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Registration"/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      Cover type
      </label>
      <select onChange={e=>
      {const selectedCover = e.target.value
        setMyCover(selectedCover)
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" d>
   
        <option disabled selected>Select cover</option>
        {cov.map((item)=><option key={item.ID} value={item.cover}>{item.cover}</option>)}
   

      
       </select> 
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      Vehicle class
      </label>
      <select onChange={(e)=>setMyVclass(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
      <option disabled selected>Select vehicle class</option>
       <option disabled >1.Motorvehicle</option>
        {mv.map((item)=><option key={item.ID} value={item.ID}>{item.class}</option>)}

        <option disabled>2.Motorcycle</option>
        {mc.map((item)=><option key={item.ID} value={item.ID}>{item.class}</option>)}
        
        <option disabled >3.Tricycle</option>
        {tr.map((item)=><option key={item.ID} value={item.ID}>{item.class}</option>)} 
       </select> 
    </div>
  </div>
  {cover==='Comprehensive'?
  <div className="flex flex-wrap -mx-3 mb-6">
    
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Year of Manufacture
      </label>
      <input onChange={(e)=>setYom(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="YOM"/>
    </div>
  </div>
  :null}
  
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        referall
      </label>
      <input  onChange={(e)=>setMyReferall(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Referrall"/>
    </div>
    {cover=='Comprehensive'?
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Sum Insured
      </label>
      <input  onChange={(e)=>setMySuminsured(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Amount"/>

    </div>:null}

    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Cover Period
      </label>
    
      
      
      <select onChange={(e)=>setCoverPeriod(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" >
          <option disabled selected>Select Cover Period</option>
          {cover === 'Comprehensive'? <Year/>:vclass==='15'||vclass==='17'?<Month/>:<MonthYear/>}
      </select>
      
    </div>

    <div className="flex flex-wrap -mx-3 mb-2">
     {vclass==='15'||vclass==='17'? 
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-3 mt-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        passengers
      </label>
      <input  onChange={(e)=>setPassenger(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Passengers"/>
    </div>:null
        }
      {vclass==='8'||vclass==='7' ?  
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        Tonnage
      </label>
      <input  onChange={(e)=>setTonnage(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Tonnage"/>
    </div>:null}
    

    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     
      
    </div>
    
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center mt-7 ml-10">

<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
     
      
    </div>
  </div>
  </div>
</form>
</div>
</div>
        </>
    )
}

export default Quote

export async function getServerSideProps(context) {
  
      
  const motoresults = await excuteQuery({
   query:"SELECT * FROM `itbl_vehicleclass` where type = 'MOTORCYCLE'"
  });

  let motocycle = JSON.parse(JSON.stringify(motoresults));

  const triresults = await excuteQuery({
    query:"SELECT * FROM `itbl_vehicleclass` where type = 'TRICYCLE'"
   });

   let tricycle = JSON.parse(JSON.stringify(triresults));

   const vehicleresults = await excuteQuery({
    query:"SELECT * FROM `itbl_vehicleclass` where type = 'MOTORVEHICLE'"
   });

   let motovehicle = JSON.parse(JSON.stringify(vehicleresults));

   
   const cover = await excuteQuery({
    query:"SELECT * FROM `itbl_coverage`"
   });

   let covera = JSON.parse(JSON.stringify(cover));

   
  

 
  return {
    props: {motovehicle,motocycle,tricycle,covera,}, // will be passed to our  page component as props
  };


}
