import excuteQuery from "../../lib/db";

export default async function handler(req, res) {
  let {
    myName,
    myEmail,
    phoneNumber,
    yom,
    registration,
    referall,
    vclass,
    cover,
    coverPeriod,
    sumInsured,
    passengers,
    tonnage,
  } = req.body;
  const age = 2022 - yom;
  let getQuote = null;
  if (cover === "Comprehensive") {
    if (!passengers && !tonnage) {
      getQuote = await excuteQuery({
        query:
          "SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =?  AND  `maxage`>? ",
        values: [referall, cover, vclass, age],
      });
    } else if (passengers) {
      getQuote = await excuteQuery({
        // query:"SELECT * FROM itbl_product   ",

        query:
          "SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `passengers`=?  AND  `maxage`>? ",
        values: [referall, cover, vclass, passengers, age],
      });
    } else {
      getQuote = await excuteQuery({
        // query:"SELECT * FROM itbl_product   ",

        query:
          "SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `maxtonnage`=?  AND  `maxage`>?  ",
        values: [referall, cover, vclass, tonnage, age],
      });
    }
  } else {
    if (!passengers && !tonnage) {
      getQuote = await excuteQuery({
        query:
          "SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =?  ",
        values: [referall, cover, vclass],
      });
    } else if (passengers) {
      getQuote = await excuteQuery({
        // query:"SELECT * FROM itbl_product   ",

        query:
          "SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `passengers`=?  ",
        values: [referall, cover, vclass, passengers],
      });
    } else {
      getQuote = await excuteQuery({
        // query:"SELECT * FROM itbl_product   ",

        query:
          "SELECT * FROM itbl_product WHERE `owner` = ? AND `coverage` = ? AND `vehicleclass` =? AND `maxtonnage`=?  ",
        values: [referall, cover, vclass, tonnage],
      });
    }
  }

  console.log(getQuote);

  res.status(200).json({ otherdata: getQuote });
}
