import { useEffect, useState } from 'react'
import { api } from '../scripts/API-services'
export default function Title(props) {
  const [acceptedPapers, setdataOfAcceptedPapers] = useState([])
  const [myobj, setMyobj] = useState(props?.acp?.find(item => {

    return item.id === parseInt(props.pid);
  }))
  useEffect(() => {
    async function getProp() {
      
      try {
        
        setMyobj(props?.acp?.find(item => {

          return item.id === parseInt(props.pid);
        })
        )
        console.log(myobj?.title)
      } catch (error) {
        console.log(error)
      }

    }
    getProp();
  }, [])
  return <>

<h6 className="card-subtitle mb-2 text-muted">
    {myobj?.title}</h6>
    <p>Presenter: {myobj?.authors[0]?.firstName}</p>
   

  </>
}