import { useRouter } from 'next/router'
import fetch from "isomorphic-unfetch";
import Header from './../../components/header'


/**
 * Display user specific data
 * Aka user profile
 */


const User = ({ data }) => {


  const router = useRouter()
  const { uid } = router.query
  const { name, surename } = data;



  return <div>User:{uid}
    firstname: {name}
    lastname: {surename}
  </div>
}


// This function gets called at fetch on server-side.
// It won't be called on client-side.
// Get user query with context.query.uid
export async function getServerSideProps(context) {
  // Call an external API endpoint to get users.
  const res = await fetch(`http://localhost:3000/api/db/db?collection=users&doc=${context.query.uid}`)
  const data = await res.json()
  // console.log(data)

  // console.log(`Show data fetched. Count: ${data.length}`);
  // console.log(context.query.uid)
  // console.log('cats')

  // By returning { props: data }
  // will receive `data` as a prop at build time
  return { props: { data } }
}



export default User
