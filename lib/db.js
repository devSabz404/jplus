import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'localhost',
    port: '3306',
    database:'iplus2',
    user:'root',
    password:""
    //live
    // host: '54.71.240.153',
    // port: '3306',
    // database:'iplus2',
    // user:'sabali',
    // password:"sabali96"
  
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

