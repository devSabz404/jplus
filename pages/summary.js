
import Layout from "../frontie/Layout";
import { useRouter } from 'next/router'
import { selectGross, selectStk } from "../features/counterSlice";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { selectUnderwriter,selectReferall } from "../features/counterSlice";
import axios from "axios";
import excuteQuery from "../lib/db";

function Load() {
 
  return (
    <div class="flex items-center justify-center space-x-2">
      <div
        class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div
        class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default  function Summary({underwriter}) {
  const underInfo = useSelector(selectUnderwriter);

  const writer = 'Jubilee General Insurance Limited'

  const newUnder = null

  for(let i = 0;i<underwriter.length;i++){
    if(underwriter[i].Name === writer )

    newUnder=underwriter[i]
  }
  const paybill = parseInt(newUnder.paybill)
  const amount = useSelector(selectGross)
  const writerName = newUnder.Name
  const EMAIL_ADDRESS = newUnder.EMAIL_ADDRESS

  console.log(paybill);
  console.log(writerName);
  console.log(EMAIL_ADDRESS);


   const [result,setResult] = useState()
   const [owner,setOwner] = useState()

   const requestId = useSelector(selectStk);
   const refer = useSelector(selectReferall)
    useEffect(() => {
        const refInfo = {refer}
        const info = {requestId};
        const fetchData = async () => {
         const res = await axios({
              method: 'post',
              url:'./api/payment/txnquery',
              data:info,
             })
             if(res.status===200){
                 setResult(res)
             }else{
                 console.log('Not ok')
             }
          };
        
        const fetchRef = async () =>{

          const res = await axios({
            method: 'post',
            url:'./api/user/getuser',
            data:refInfo,
           })
           if(res.status===200){
               setOwner(res)
           }else{
               console.log('Not ok')
           }

        }
       
        fetchData();
        fetchRef();
      }, []);

      // console.log('show',result)
      // var results = null
      // if(!result){
      //   results=1
      // }else{
      //   results = result.data.ResultCode
      // }


      
	const handleSubmit = async (e) => {
    //console.log(name)
 e.preventDefault();
let amount=1
 const info ={amount,paybill}
    const res = await axios({
         method: 'post',
         //url:'http://localhost/jplus/server',
         url:'https://jendie.co.ke/jplus/b2b.php',
         data:info,
      
     });

     if(res.status===200 && res.data.ResponseCode==='0'){
       async function upload(){

        await axios({
          method: 'post',
          //url:'http://localhost/jplus/server',
          url:'./api/pdf',
          data:info

        })
       }

     }
     
 
};
     
     

  return (
   // results==='0' ?
      <Layout>
        <div class="w-full max-w-lg mx-auto">
          <div class="rounded-lg shadow-lg p-12 text-xs mt-8 mx-4 sm:mx-0 bg-white">
            <div>
              <div class="flex flex-col">
                <h1 class="text-gray-800 text-xl font-medium mb-2">Successful</h1>
                <p class="text-gray-600 text-xs">Date: 05.03.22</p>
                <p class="text-gray-600 text-xs">Order Number: 0000000001</p>
              </div>
              <hr class="my-4" />
              <div>
               
                <div class="mb-4 flex justify-between items-center">
                  <span></span>
                  <span class=""></span>
                </div>

               
                <div class="mb-4 flex justify-between items-center">
                  <span></span>
                  <span class=""></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium text-base"></span>
                  <span class="text-base font-medium"></span>
                </div>
                <div class="flex justify-between items-center">
                  <span></span>
                  <span class=""></span>
                </div>
               
                <hr class="my-4" />
               
               
                
              </div>
            </div>
            
          </div>
          <button onClick={handleSubmit} type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Finish</button>
         
        </div>
      </Layout>
  //   :
  //   <Layout>
  //   <div class="w-full max-w-lg mx-auto">
  //     <div class="rounded-lg shadow-lg p-12 text-xs mt-8 mx-4 sm:mx-0 bg-white">
  //       <div>
  //         <div class="flex flex-col">
  //           <h1 class="text-gray-800 text-xl font-medium mb-2">Failed</h1>
  //           <p class="text-gray-600 text-xs">Date: 05.03.22</p>
  //           <p class="text-gray-600 text-xs">Order Number: 0000000001</p>
  //         </div>
  //         <hr class="my-4" />
  //         <div>
            
  //           <div class="mb-4 flex justify-between items-center">
  //             <span></span>
  //             <span class=""></span>
  //           </div>

            
  //           <div class="mb-4 flex justify-between items-center">
  //             <span></span>
  //             <span class=""></span>
  //           </div>
  //           <div class="flex justify-between items-center">
  //             <span class="font-medium text-base"></span>
  //             <span class="text-base font-medium"></span>
  //           </div>
  //           <div class="flex justify-between items-center">
  //             <span></span>
  //             <span class=""></span>
  //           </div>
  //           <hr class="my-4" />
           
  //           </div>
           
           
  //         </div>
  //       </div>
  //     </div>
    
  // </Layout>
  );
}

export async function getServerSideProps(){

  const underwriters = await excuteQuery({
    query:"SELECT * FROM `itbl_underwriters`"
   });
 
   let underwriter = JSON.parse(JSON.stringify(underwriters));

   return{props:{underwriter}}



}




