import { useState } from 'react'
import Router from 'next/router'
import Main from './Main'


export default function EntryForm() {
  //const [myname, setName] = useState('')
  //const [email, setEmail] = useState('')
  const [product,setProduct] = useState('')
  const [vehicleClass,setVehicleClass] = useState('')
  const [underwriter,setUnderwriter] = useState('')
  const [coverage,setCoverage] = useState('')
  const [description,setDescription] = useState('')
  const [clauses,setClauses] = useState('')
  const [waranty,setWaranty] = useState('')
  const[benefits,setBenefits] = useState('')
  const [maxTonnage,setMaxTonnage] = useState('')
  //const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/createproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,vehicleClass,underwriter,coverage,description,clauses,waranty,benefits,maxTonnage
          
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
    <Main>
    <form onSubmit={submitHandler}>

             <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_name">Product</label>
                        <input id="form_name" type="text" name="product" value={product} onChange={(e) => setProduct(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_email">Choose Vehicle className to be Covered</label>
                        <input id="form_email" type="text" name="vehicleClass" value={vehicleClass} onChange={(e) => setVehicleClass(e.target.value)} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Choose Underwriter</label>
                        <input id="form_phone" type="text" name="underwriter" value={underwriter} onChange={(e) => setUnderwriter(e.target.value)} className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_name">Choose Coverage</label>
                        <input id="form_name" type="text" name="coverage" value={coverage} onChange={(e) => setCoverage(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_email">Product Description</label>
                        <input id="form_email" type="text" name="description"  value={description} onChange={(e) => setDescription(e.target.value)}  className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Clauses</label>
                        <input id="form_phone" type="text" name="clauses" value={clauses} onChange={(e) => setClauses(e.target.value)}  className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_name">Conditions and waranties</label>
                        <input id="form_name" type="text" name="waranty" value={waranty} onChange={(e) => setWaranty(e.target.value)} className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_email">Policy Limits and Benefits</label>
                        <input id="form_email" type="text" name="benefits" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Minimum Tonnage</label>
                        <input id="form_phone" type="text" name="maxTonnage" value={maxTonnage} onChange={(e) => setMaxTonnage(e.target.value)}  className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_name">Maximum Tonnage</label>
                        <input id="form_name" type="text" name="surname" className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_email">Weekly Rates</label>
                        <input id="form_email" type="text" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Fortnite Rates</label>
                        <input id="form_phone" type="text" name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_name">Monthly Rates </label>
                        <input id="form_name" type="text" name="surname" className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_email">Number of Passengers</label>
                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Annual Rates</label>
                        <input id="form_phone" type="text" name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div> */}

            {/* <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_name">Minimum excluded</label>
                        <input id="form_name" type="text" name="surname" className="form-control" placeholder="Please enter your name *" required="required" data-error="name is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label for="form_email">Minimum Premium</label>
                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Maximum Age</label>
                        <input id="form_phone" type="text" name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Minimum Age</label>
                        <input id="form_phone" type="text" name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="form_phone">Maximum sum Insured</label>
                        <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group">
                        <label for="form_phone">Minimum sum Insured</label>
                        <input id="form_phone" type="text" name="phone" className="form-control" placeholder="Please enter your phone number"/>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
            </div>

 */}




      {/* <div className="row">
        <label htmlFor="title">
          <h3 className="font-bold">Title</h3>
        </label>
        <input
          id="title"
          className="shadow border rounded w-full"
          type="text"
          name="myname"
          value={myname}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Content</h3>
        </label>
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48"
          id="content"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div> */}
      <input  type="submit">
    
      </input>
       
     
    </form>
    </Main>
  )
}

