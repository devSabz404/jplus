/* eslint-disable import/no-anonymous-default-export */
export default async function  Authenticated (req, res) {
    const { cookies } = req;
  
    const jwt = cookies.OursiteJWT;
  
    if (!jwt) {
      return res.json({ message: "Invalid token!" });
    }
    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };
    const tkn =parseJwt(jwt)
    return res.json({  tkn });
  }




