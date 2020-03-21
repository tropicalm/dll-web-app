import { useRouter } from 'next/router'
const { getFs } = require('./../../lib/firebase/firebase')
import fetch from "isomorphic-unfetch";
import Header from './../../components/header'


/**
 * Display user specific data
 * Aka user profile
 */


const User = ({ data }) => {
  const router = useRouter()
  const { uid } = router.query
  console.log(uid)
  console.log(data)

  return <div>User: {uid}</div>
}


// This function gets called at fetch on server-side.
// It won't be called on client-side.
// Get user query with context.query.uid
export async function getServerSideProps(context) {
  // Call an external API endpoint to get users.
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  // console.log(`Show data fetched. Count: ${data.length}`);
  console.log(context.query.uid)
  console.log('cats')

  // By returning { props: data }
  // will receive `data` as a prop at build time
  return {
    props: {
      data,
    },
  }
}


export default User
