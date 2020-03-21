import { useRouter } from 'next/router'
import Header from './../../components/header'


const User = () => {
    const router = useRouter()
    const { uid } = router.query
    console.log(uid)

    return <div>User: {uid}</div>
}

export default User