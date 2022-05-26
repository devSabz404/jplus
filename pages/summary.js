
import Layout from "../frontie/Layout";
import { useRouter } from 'next/router'
import { selectGross, selectLogbook, selectName, selectProduct, selectStk } from "../features/counterSlice";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { selectUnderwriter,selectReferall ,selectUnique} from "../features/counterSlice";
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import axios from "axios";
import excuteQuery from "../lib/db";

function Load() {
 
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default  function Summary({underwriter,owners}) {
  const router = useRouter()

  const logbook = useSelector(selectLogbook)
  const clientIdentity = useSelector(selectUnique)

  const writer = useSelector(selectUnderwriter)//'Jubilee General Insurance Limited'

  const newUnder = null

  for(let i = 0;i<underwriter.length;i++){
    if(underwriter[i].Name === writer )

    newUnder=underwriter[i]
  }
  const paybill = parseInt(newUnder.paybill)
  const amount = useSelector(selectGross)
  const writerName = newUnder.Name
  const underwriterEmail = newUnder.EMAIL_ADDRESS
  const productDetail = useSelector(selectProduct)
  const fullname = useSelector(selectName)


   const [result,setResult] = useState()
  

   const requestId = useSelector(selectStk);

    useEffect(() => {
      
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
        
      
       
        fetchData();
        
      }, []);

      console.log(owners)

      const company =  owners[0].companyname;
      const physicaladdress = owners[0].physicaladdress;
      const phonenumber = owners[0].phonenumber;
      const emailaddress = owners[0].emailaddress;
   

       const ownerInfo ={clientIdentity,fullname,productDetail,underwriterEmail,company,physicaladdress,phonenumber,emailaddress,logbook,amount,writerName}
      console.log(ownerInfo)

      console.log('show',result)
      var results = null
      if(!result){
        results=1
      }else{
        results = result.data.ResultCode
      }


      
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
      const res = await axios({
        method: 'post',
        //url:'http://localhost/jplus/server',
        url:'./api/pdf',
        data:ownerInfo
     
    });
 
    if(res.status===200 ){
      console.log('ok')
      router.push('./')
 
    }else{
      console.log('not okay')
    }
    

     }
     
 
};






     

     
     

  return (
  results==='0' ?
      <Layout>
        <div className="w-full max-w-lg mx-auto">
          <div className="rounded-lg shadow-lg p-12 text-xs mt-8 mx-4 sm:mx-0 bg-white">
            <div>
              <div className="flex flex-col">
                <h1 className="text-gray-800 text-xl font-medium mb-2">Successful</h1>
                <p className="text-gray-600 text-xs">Date: 05.03.22</p>
                <p className="text-gray-600 text-xs">Order Number: 0000000001</p>
              </div>
              <hr className="my-4" />
              <div>
               
                <div className="mb-4 flex justify-between items-center">
                  <span></span>
                  <span className=""></span>
                </div>

               
                <div className="mb-4 flex justify-between items-center">
                  <span></span>
                  <span className=""></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-base"></span>
                  <span className="text-base font-medium"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span></span>
                  <span className=""></span>
                </div>
               
                <hr className="my-4" />
               
               
                
              </div>
            </div>
            
          </div>
          <button onClick={handleSubmit} type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Finish</button>
         
        </div>
      </Layout>
    :
    <Layout>
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-lg shadow-lg p-12 text-xs mt-8 mx-4 sm:mx-0 bg-white">
        <div>
          <div className="flex flex-col">
            <h1 className="text-gray-800 text-xl font-medium mb-2">Failed</h1>
            <p className="text-gray-600 text-xs">Date: 05.03.22</p>
            <p className="text-gray-600 text-xs">Order Number: 0000000001</p>
          </div>
          <hr className="my-4" />
          <div>
            
            <div className="mb-4 flex justify-between items-center">
              <span></span>
              <span className=""></span>
            </div>

            
            <div className="mb-4 flex justify-between items-center">
              <span></span>
              <span className=""></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-base"></span>
              <span className="text-base font-medium"></span>
            </div>
            <div className="flex justify-between items-center">
              <span></span>
              <span className=""></span>
            </div>
            <hr className="my-4" />
           
            </div>
           
           
          </div>
        </div>
      </div>
    
  </Layout>
  );
}

export async function getServerSideProps({ req, res }){
const refer = getCookie('referall', { req, res});

const owner = await excuteQuery({
  query:"SELECT * FROM `tbl_user` WHERE `agent_admin`=?",
  values:[refer]
 });

 let owners = JSON.parse(JSON.stringify(owner));

  const underwriters = await excuteQuery({
    query:"SELECT * FROM `itbl_underwriters`"
   });
 
   let underwriter = JSON.parse(JSON.stringify(underwriters));



   return{props:{underwriter,owners}}



}




