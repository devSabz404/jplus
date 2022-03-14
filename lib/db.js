import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: '54.204.202.39',
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

