import excuteQuery from "../../../lib/db";

const handler = async (req, res) => {
  const {
    prodID,
    vclass,
    underwriter,
    coverage,
    comprate,
    benefitName,
    optprem,
    optionalrate,
    freelimit,
    maxtonn,
    mintonn,
    weeklyrates,
    fortrates,
    monthlyrates,
    annualrates,
    excluded,
    minPremium,
    pass,
    maxage,
    minage,
    minInsured,
    maxInsured,
  } = req.body;

  // console.log(req.body);
  // console.log(typeof(req.body.prodId))
  // for (let [key, value] of Object.entries(req.body)) {
  //   console.log(key, value);
//}
console.log(benefitName)
let benname=null
if(benefitName){
  let ben =  await excuteQuery({
    query:'SELECT benefit_name FROM itbl_benefits WHERE benefit_id=?',
    values:[benefitName]
  })
  let benn = JSON.parse(JSON.stringify(ben));
  benname=benn[0].benefit_name
  
}

  try {
    const results = await excuteQuery({
      query: `UPDATE itbl_product SET
     vehicleclass=?,
     underwriter=?,
     coverage=?,
     compr_rate=?,
    optionalname=?,
    optionalpremium=?,
    optionalrate=?,
    freelimit=?,
    mintonnage=?,
    maxtonnage=?,
    weeklyrates=?,
    fortnightrates=?,
    monthlyrates=?,
    annualrates=?,
    excludedvehicles=?,
    minimumpremium=?,
    passengers=?,
    maxage=?,
    minage=?,
    maxsum=?,
    minsum=?,
    benefit_id=? WHERE product_id=?`,

      values: [
        vclass,
        underwriter,
        coverage,
        comprate,
        benname,
        optprem,
        optionalrate,
        freelimit,
        mintonn,
        maxtonn,
       
        weeklyrates,
        fortrates,
        monthlyrates,
        annualrates,
        excluded,
        minPremium,
        pass,
        maxage,
        minage,
        
        maxInsured,
        minInsured,
        benefitName,
        prodID,
       
      ],
    });
    console.log("hey how", results);
    return res.json(results);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};

export default handler;
