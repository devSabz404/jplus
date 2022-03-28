import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'http://ec2-54-71-240-153.us-west-2.compute.amazonaws.com',
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

