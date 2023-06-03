
'use client'
import { useEffect , useState} from 'react'
import  SubmitPaper from '../../public/author/SubmitPaper'
import { api } from '../../public/scripts/API-services'
//import { signIn, signOut,useSession, getSession} from 'next-auth/react';

import Loader from '../../public/Loader'
function Page() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  //const { data: session } = useSession()
  //console.log(session)
  
  useEffect(() => {
    async function getinstitute() {
      setLoading(true)
      setUniversities(...(await api.getInstitutions()))
      
      console.log(universities)
      setLoading(false)
    }
    getinstitute();
  }, [])
  return <>
  {/* {JSON.stringify(universities.instituteName)} */}
 {!loading ? <SubmitPaper uni={universities.instituteName} />: <Loader/> }
  </>
}
export default Page;

