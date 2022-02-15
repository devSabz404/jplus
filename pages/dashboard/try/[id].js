import excuteQuery from "../../../lib/db";


export default function Book({user}) {
    return (
        <article>
            <h1>user Details Page</h1>
            <p>{user}</p>
            <p></p>
        </article>
    )
}



  export async function getStaticProps(context) {

    const id = context.params.id;

    
    let users = await excuteQuery({
        query:"SELECT * FROM tbl_user WHERE user_id = ?",
        values:[id]
    })

    const user = JSON.stringify(users)

    return { props: { user }}
}

export async function getStaticPaths() {
    let users = await excuteQuery({
        query:"SELECT * FROM tbl_user",
       
    })

    const paths = users.map((user) => ({
        params: { id: user.user_id.toString() },
      }))
      return { paths, fallback: false }

    
   }