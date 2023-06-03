import { useState } from 'react'
import Title from './Title'
export default function ShowPresentations(props) {
  const [data, setTitle]=useState({})
 // sessions={sec} 
  const [present, setPresent] = useState([...props.mps?.presentations])
  return <>
  
    {
      present.map((p) => {
        
        return <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title"> From: {p.startTime} To:{p.enddTime}</h5>
           <Title acp={props.acp} pid={p.paperId}/> 
            
           
          </div>
        </div>
      })
    }
  </>
}