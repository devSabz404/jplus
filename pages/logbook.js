import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Layout from "../frontie/Layout";
import {selectReferall, selectUnique,setlogbook} from "../features/counterSlice"
import { useRouter } from "next/router";
import { setCookies } from 'cookies-next';


export default function Logbook(){
  const router = useRouter();
  const dispatch = useDispatch();
  const referall = useSelector(selectReferall);
  const clientIdentity = useSelector(selectUnique)
  setCookies('clientID', clientIdentity); 
  setCookies('referall', referall); 

  const [Registration,setRegistration] = useState()
  const [Chasis,setChasis] = useState()
  const [Make,setMake] = useState()
  const [IdNumber,setIdNumber] = useState()
  const [Model,setModel] = useState()
  const [Type,setType] = useState()
  const [Body,setBody] = useState()
  const [Fuel,setFuel] = useState()
  const [Manufactured,setManufactured] = useState()
  const [CCRating,setCCRating] = useState()
  const [EngineNumber,setEngineNumber] = useState()
  const [Color,setColor] = useState()
  const [RegistrationDate,setRegistrationDate] = useState()
  const [GrossWeight,setGrossWeight] = useState()
  const [Duty,setDuty] = useState()
  const [PreviousOwners,setPreviousOwners] = useState()
  const [Passengers,setPassengers] = useState()
  const [TareWeight,setTareWeight] = useState()
  const [TaxClass,setTaxClass] = useState()
  const [Axels,setAxels] = useState()
  const [LoadCapacity,setLoadCapacity] = useState()
  const [PreviousCountry,setPreviousCountry] = useState()
  const [PreviousRegistration,setPreviousRegistration] = useState()
  const [DatePolicy,setDatePolicy] = useState()
  const [KraPin, setKra] = useState(null);
  const [Passport,setPassport] = useState()
  const [UploadKRA,setUploadkra] = useState()
  const [Logbook,setLogBook] = useState()

  
 
  
  

  
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/uploads3/first?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  };
  const uploadPhoto1 = async (e) => {
      const file = e.target.files[0];
   
      const filename = encodeURIComponent(file.name);
    
      const res = await fetch(`/api/uploads3/second?file=${filename}`);
      const { url, fields } = await res.json();
      const formData = new FormData();
  
      Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
      });
    
     
  
      const upload = await fetch(url, {
        method: 'POST',
        body: formData,
      });
  
      if (upload.ok) {
        console.log('Uploaded successfully!');
      } else {
        console.error('Upload failed.');
      }
    };
    const uploadPhoto2 = async (e) => {
      const file = e.target.files[0];
      const filename = encodeURIComponent(file.name);
      const res = await fetch(`/api/uploads3/third?file=${filename}`);
      const { url, fields } = await res.json();
      const formData = new FormData();
  
      Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      const upload = await fetch(url, {
        method: 'POST',
        body: formData,
      });
  
      if (upload.ok) {
        console.log('Uploaded successfully!');
      } else {
        console.error('Upload failed.');
      }
    };


  const logbookInfo = {
    clientIdentity,
    Registration,Chasis,Make,Model,Type,Body,Fuel,Manufactured,CCRating,EngineNumber,Color,RegistrationDate,GrossWeight,
    Duty,PreviousOwners,Passengers,TareWeight,TaxClass,Axels,LoadCapacity,PreviousCountry,PreviousRegistration,DatePolicy,KraPin,IdNumber,Passport,
    Logbook,UploadKRA
  }



  const uploadToServer = async (event) => { 
       
    event.preventDefault()   
    dispatch(setlogbook(logbookInfo));
   
    const res = await axios.post('./api/logbookinfo',logbookInfo,

    )
    if (res.status === 200){
      console.log('Ok',res.data)
      
  
     
      router.push('/confirm')
    }else{
      console.log("not ok")
    }
    

  
   


  
}


   

 

    return(
        <>
        <Layout>
        <div className=" bg-[url('../public/backg/logbook.png')] bg-auto bg-[length:700px width:300px] ">
        <div className="flex justify-center " >
        
    <form onSubmit={uploadToServer} className="w-full max-w-lg mt-[300px] " encType="multipart/form-data">
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Registration
      </label>
      <input onChange={(e)=>setRegistration(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Chasis/Frame Number
      </label>
      <input onChange={(e)=>setChasis(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Make
      </label>
      <input onChange={(e)=>setMake(e.target.value)}className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Model
      </label>
      <input onChange={(e)=>setModel(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Type
      </label>
      <input onChange={(e)=>setType(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Body
      </label>
      <input onChange={(e)=>setBody(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Fuel
      </label>
      <input onChange={(e)=>setFuel(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Manufactured Year
      </label>
      <input onChange={(e)=>setManufactured(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        CC Rating
      </label>
      <input onChange={(e)=>setCCRating(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Engine Number
      </label>
      <input onChange={(e)=>setEngineNumber(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Color
      </label>
      <input onChange={(e)=>setColor(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Registration Date
      </label>
      <input onChange={(e)=>setRegistrationDate(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Gross Weight
      </label>
      <input onChange={(e)=>setGrossWeight(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Duty
      </label>
      <input onChange={(e)=>setDuty(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Number of Previous Owners
      </label>
      <input onChange={(e)=>setPreviousOwners(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Passengers
      </label>
      <input onChange={(e)=>setPassengers(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Tare Weight
      </label>
      <input onChange={(e)=>setTareWeight(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Tax Class
      </label>
      <input onChange={(e)=>setTaxClass(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    Axels
      </label>
      <input onChange={(e)=>setAxels(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Load Capacity(KG)
      </label>
      <input onChange={(e)=>setLoadCapacity(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder=""/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    Previous Registration Country
      </label>
      <input onChange={(e)=>setPreviousCountry(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Previous Registration
      </label>
      <input onChange={(e)=>setPreviousRegistration(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    ID/Passport
      </label>
      <input onChange={(e)=>setIdNumber(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        KRA PIN
      </label>
      <input  onChange={(e)=>setKra(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    Date Policy
      </label>
      <input onChange={(e)=>setDatePolicy(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder=""/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Upload ID/Passport
      </label>
      <input onChange={uploadPhoto1} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" placeholder="" accept=".pdf"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Upload Logbook Copy
      </label>
      <input onChange={uploadPhoto2} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" placeholder="" accept=".pdf"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Upload KRA PIN
      </label>
      <input onChange={uploadPhoto} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="file" placeholder="" accept=".pdf"/>
    </div>
   
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
 
 
 
 
</form>
</div>
</div>
</Layout>


        </>
    )
}
