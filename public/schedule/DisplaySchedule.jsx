'use client'
import { useEffect, useState } from 'react';

import { api } from '../scripts/API-services'
import ShowPresenter from './ShowPresenter';
import Loader from '../Loader'
export default function DisplaySchedule() {

  const [mypresentations, setPresentations] = useState([]);
  const [dataOfAcceptedPapers, setdataOfAcceptedPapers] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAllrecords() {

      try {
        setLoading(true);
        setPresentations(await api.getSchedule())
        setdataOfAcceptedPapers(await api.getAcceptedPapers())
        setLoading(false)
      //  console.log(mypresentations.filter((p)=>{return p.presentations.length>0}))
        // setRecords(presentations.forEach(press => {
        //   return {
        //     ...press,
        //     ...getPaperInfor(press.presentations.paperId)

        //   }
        // }))
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllrecords();
  }, [])
  return <>
  
  {
    loading ? <Loader/> :

    (mypresentations.filter((p)=>{return p.presentations.length>0}).map((rec, index) => {
      return <div className="card text-center mydisplaybox" key={index}>
        <div className="card-header"><h4>{rec.title}</h4></div>
        <div className="card-body">
         
        <ShowPresenter apList={dataOfAcceptedPapers} paperId= {rec?.presentations[index]?.paperId}/>
         
          <h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">
              <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
            </svg>
           
            Start Time: {rec?.presentations[index]?.startTime} End Time: {rec?.presentations[index]?.enddTime}
          </h5>
        </div>
        <div className="card-footer text-muted">
          <h6>
            <pre>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check-fill" viewBox="0 0 16 16">

                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg> {rec?.date}
            </pre>
            <pre> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
              {rec?.location}
            </pre>
          </h6>
        </div>
      </div >
    })
    )

  }

{mypresentations.length===0 && !loading && <h4 className='infoMessage'>No data Found for Presentation</h4>}
  </>
}