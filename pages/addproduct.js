import { useState } from 'react'
import Router from 'next/router'
import excuteQuery from '../lib/db';
import Main  from '../components/Main';
import Layout from '../components/Layout';



export default function EntryForm(props) {


  //console.log(props.underwrit[0].Name);
// //   console.log(motocycle);
// //   console.log(tricycle);

//   if (!props){
//       console.log("boo")
//   }

  const motoveh = props.motovehicle.map((item)=>item);
  const motocy = props.motocycle.map((item)=>item);
  const mototri = props.tricycle.map((item)=>item);
  const under = props.underwrit.map((item)=>item);
  const cov = props.covera.map((item)=>item);

  //console.log(cov)
 

  

 const [product,setProduct] = useState('BimaPlus')
  const [productCode,setProductCode] = useState('11');
  const [category,setCategory] = useState('');
  const [vehicleClass,setVehicleClass] = useState('')
  const [underwriter,setUnderwriter] = useState('')
  const [coverage,setCoverage] = useState('')
  const [description,setDescription] = useState('')
  const [clauses,setClauses] = useState('')
  const [waranty,setWaranty] = useState('')
  const [benefits,setBenefits] = useState('')
  const [excludedVehicles,setExcludedVehicles] = useState('')
  const [maxTonnage,setMaxTonnage] = useState('')
  const [minTonnage,setMinTonnage] = useState('')
  const [weeklyRates,setWeeklyRates] = useState('')
  const [monthlyRates,setMonthlyRates] = useState('')
  const [fortniteRate,setFortnite] = useState('')
  const [passengers,setPassengers] = useState('')
  const [annualRates,setAnnualRates] = useState('')
  const [maxExcluded,setMaxExcluded] = useState('')
  const [minExcluded,setMinExcluded] = useState('')
  const [maxAge,setMaxAge] = useState('')
  const [minAge,setMinAge] = useState('')
  const [maxInsured,setMaxInsured] = useState('')
  const [minInsured,setMinInsured] = useState('')
  const [minPremium,setMinPremium] = useState('')
  const [optionalName,setOptionalName] = useState('')
  const [optionalPremium,setOptionalPremium] = useState('')
  const [optionalRate,setOptionalRate] = useState('')
  const [unique,setUnique] = useState('')
  const [owner,setOwner] = useState('')
  const [showInput, setShowInput] = useState();




 
async function submitHandler(e) {
    
    e.preventDefault()
    try {
      const res = await fetch('/api/createproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,productCode,category,vehicleClass,underwriter,coverage,description,clauses,waranty,benefits,
          excludedVehicles,maxTonnage,minTonnage,weeklyRates,monthlyRates,fortniteRate,passengers,annualRates,maxExcluded,
          minExcluded,maxAge,minAge,maxInsured,minInsured,minPremium,optionalPremium,optionalRate,optionalName,benefits,owner,unique
          
        }),
      })
      //console.log(res.body)
    //   setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <>
    <Layout/>
    <Main>
    <form onSubmit={submitHandler}>

             <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Product</label>
                        <input id="form_name" type="text" name="product" value={product} onChange={(e) => setProduct(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_name">Product Code</label>
                        <input id="form_name" type="text" name="productCode" value={productCode} onChange={(e) => setProductCode(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_name">Category</label>
                        <input id="form_name" type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_email">Choose Vehicle className to be Covered</label>
                        <input id="form_email" type="text" name="vehicleClass" value={vehicleClass} onChange={(e) => setVehicleClass(e.target.value)} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>

                    <select className="form-select" aria-label="Default select example">
                       
                        <option defaultValue={'Choose Vehicle Class'}>Choose Vehicle Class</option>
                        <optgroup label="Motovehicle">
                            {
                                motoveh.map((item)=><option key={item.ID} value={item.class}>{item.class}</option>)
                            }
                        
                        </optgroup>
                        <optgroup label="Motocycle">
                        
                            {
                                motocy.map((item)=><option key={item.ID} value={item.class}>{item.class}</option>)
                            }
                        </optgroup>

                        <optgroup label="Tricycle">
                        
                            {
                                mototri.map((item)=><option key={item.ID} value={item.class}>{item.class}</option>)
                            }
                        </optgroup>
                    </select>
                                    
                                    <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Choose Underwriter</label>
                        <input id="form_phone" type="text" name="underwriter" value={underwriter} onChange={(e) => setUnderwriter(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>

                    <select className="form-select" aria-label="Default select example" >
                        
                        <option>Choose Underwriter</option>
                        
                            {
                                under.map((item)=><option key={item.ID} value={item.Name}>{item.Name}</option>)
                            }
                        
                       
                       
                        </select>

                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Choose Coverage</label>
                   

                        <select className="form-select"
                         aria-label="Default select example"
                         onChange={(e)=>{const covar = e.target.value;
                        setCoverage(covar);
                        covar==='Comprehensive'?setShowInput(true):setShowInput(false)
                        //covar==='Comprehensive'?setShowInput(true):setShowInput(false);
                        //covar==='Third Party And Theft'?setShowInput(true):setShowInput(false);
                    }}
                         >
                        
                        <option >Choose Coverage</option>
                        
                            {
                                
                                cov.map((item)=><option 

                                 key={item.ID} value={item.cover} >{item.cover}</option>)
                            }
                        
                       
                       
                    </select>
                   
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_email">Product Description</label>
                        <input id="form_email" type="text" name="description"  value={description} onChange={(e) => setDescription(e.target.value)}  className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Clauses</label>
                        <input id="form_phone" type="text" name="clauses" value={clauses}
                         onChange={(e) => setClauses(e.target.value)}  className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Conditions and waranties</label>
                        <input id="form_name" type="text" name="waranty" value={waranty} onChange={(e) => setWaranty(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_email">Policy Limits and Benefits</label>
                        <input id="form_email" type="text" name="benefits" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Minimum Tonnage</label>
                       
                        <input id="form_phone" type="text" name="maxTonnage" 
                        value={maxTonnage} onChange={(e) => setMaxTonnage(e.target.value)}  
                        disabled={showInput}
                        
                        className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Maximum Tonnage</label>
                        <input id="form_name" type="text" name="minTonnage" value={minTonnage} 
                        onChange={(e) => setMinTonnage(e.target.value)}  className="form-control"
                         placeholder="Please enter your name *" required="required" 
                         disabled={showInput}
                         data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_email">Weekly Rates</label>
                        <input id="form_email" type="text" name="weeklyRates" 
                        value={weeklyRates} onChange={(e) => setWeeklyRates(e.target.value)} 
                        disabled={showInput}
                        className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Fortnite Rates</label>
                        <input id="form_phone" type="text" name="fortniteRate"  value={fortniteRate} 
                        onChange={(e) => setFortnite(e.target.value)}
                        disabled={showInput}
                         className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Monthly Rates </label>
                        <input id="form_name" type="text" name="monthlyRates" 
                        value={monthlyRates} onChange={(e) => setMonthlyRates(e.target.value)}
                        disabled={showInput}
                         className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Optional Rates </label>
                        <input id="form_name" type="text" name="optionalRate" value={optionalRate} onChange={(e) => setOptionalRate(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Optional Name </label>
                        <input id="form_name" type="text" name="optionalName" value={optionalName} onChange={(e) => setOptionalName(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Optional Premium </label>
                        <input id="form_name" type="text" name="optionalPremium" value={optionalPremium} onChange={(e) => setOptionalPremium(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_email">Number of Passengers</label>
                        <input id="form_email" type="text" name="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Annual Rates</label>
                        <input id="form_phone" type="text" name="annualRates"  value={annualRates} onChange={(e) => setAnnualRates(e.target.value)}className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div> 

             <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_name">Minimum excluded</label>
                        <input id="form_name" type="text" name="maxExcluded" value={maxExcluded} onChange={(e) => setMaxExcluded(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="form_email">Minimum Premium</label>
                        <input id="form_email" type="text" name="minExcluded" value={minExcluded} onChange={(e) => setMinExcluded(e.target.value)} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Maximum Age</label>
                        <input id="form_phone" type="text" name="maxAge" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_name">Excluded</label>
                        <input id="form_name" type="text" name="excludedVehicles" value={excludedVehicles} onChange={(e) => setExcludedVehicles(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="form_phone">Minimum Age</label>
                        <input id="form_phone" type="text" name="minAge" value={minAge} onChange={(e) => setMinAge(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

                <div className="col-sm-3">
                <div className="form-group">
                        <label htmlFor="form_phone">Minimum Premium</label>
                        <input id="form_phone" type="text" name="minPremium" value={minPremium} onChange={(e) => setMinPremium(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_phone">Maximum sum Insured</label>
                        <input id="form_phone" type="text" name="maxInsured" value={maxInsured} onChange={(e) => setMaxInsured(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="form_phone">Minimum sum Insured</label>
                        <input id="form_phone" type="text" name="minInsured" value={minInsured} onChange={(e) => setMinInsured(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="form_phone">Unique</label>
                        <input id="form_phone" type="text" name="unique" value={unique} onChange={(e) => setUnique(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="form_phone">Owner</label>
                        <input id="form_phone" type="text" name="owner" value={owner} onChange={(e) => setOwner(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>






     
      
      <input  type="submit">
    
      </input>
       
     
    </form>
    </Main>
   
    </>
  )
}

export async function getStaticProps(context) {
    try {
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

       const underwriters = await excuteQuery({
        query:"SELECT * FROM `itbl_underwriters`"
       });
   
       let underwrit = JSON.parse(JSON.stringify(underwriters));

       const cover = await excuteQuery({
        query:"SELECT * FROM `itbl_coverage`"
       });
   
       let covera = JSON.parse(JSON.stringify(cover));

     
      return {
        props: {motovehicle,motocycle,tricycle,underwrit,covera}, // will be passed to our blog page component as props
      };
    } catch (e) {
      
      
      return console.log(e.message);
    }
  }
  