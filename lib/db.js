import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    // host: 'localhost',
    // port: '3306',
    // database:'iplus',
    // user:'root',
    // password:"sabali96"
    //live
    host: '54.71.240.153',
    port: '3306',
    database:'iplus',
    user:'root',
    password:""
  
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

