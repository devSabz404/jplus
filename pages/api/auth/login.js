/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import excuteQuery from "../../../lib/db";
import bcrypt from 'bcrypt'


export default async function (req, res) {
  const { email, password } = req.body;
  const secret = `${process.env.SECRET}`

  // Check in the database
  // if a user with this username
  // and password exists
  const user = await excuteQuery({
    query:'SELECT * FROM tbl_user WHERE `emailaddress` =?',
    values :[email]
})
const match = bcrypt.compare(password, user[0].password);

if(!match) {return res.status(400).json({msg: "Wrong Password"})}

  else if (match) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        id: user[0].user_id,
        username: user[0].firstname,
        company:user[0].company,
        email:user[0].emailaddress,
        owner:user[0].agent_admin,
     
      },
      secret
    );

    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}