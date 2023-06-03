import { useEffect, useState } from 'react'
import { api } from '../scripts/API-services'
import SessionComponent from './SessionComponent'
export default function AddSession(props) {


  const [session, setSession] = useState({});
  const [displaySession, setDisplaySession] = useState([])
  const [showSession, setShowSession] = useState([]);
  const [sessionMessage, setSessionMessage] = useState('');
 
  const [isNewSessioCreated, setIsNewSessionCreated] = useState(1);
  const [loading, setLoading] = useState(false);

  function newSessionCreated(v)
  {
    console.log(v)
    setIsNewSessionCreated(parseInt(v)+3)
  }
  function onChangeHandler(e) {
    const ids = parseInt(e.target.value)
    const s = showSession.filter((se) => {
      return se.id === ids
    })
    // const val = e.target.value
    setDisplaySession(s)
    console.log(displaySession)
    //setDisplaySession(s)
  }


  useEffect(() => {
    async function fetchSession() {
      try {
        console.log('new session created');
        setShowSession(await api.getSchedule())
       // console.log(JSON.stringify(showSession));
       
      } catch (error) {
        console.log(error)
      }
    }
    fetchSession();
  }, [isNewSessioCreated])

  function locationHandler(e) {
    setSession({ ...session, location: e.target.value })
  }
  function dateHandler(e) {
    setSession({ ...session, date: e.target.value })
  }
  function titleHandler(e) {
    setSession({ ...session, title: e.target.value })
  }
  async function formHandler(e) {
    e.preventDefault();

    try {
      console.log('i am here')
      setSessionMessage('');
      const resp = await api.addSession(session);
      console.log('session is saved');
      setIsNewSessionCreated(isNewSessioCreated+1)
      setSessionMessage('Session is Created')
    } catch (error) {
      console.log(error);
    }

  }
  return <>

{ sessionMessage.length>0 &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{sessionMessage}</strong> 
  
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  />
</div> }

    {displaySession.title}
    <div className='sessionHeading'>
      <h3>Confrence Schedule</h3>
      <select className="form-select myselect" aria-label="Default select example" onChange={onChangeHandler}>
        <option value='0'>Select Paper to review</option>
        {showSession.map((session, index) => {
          return <option key={index} value={session.id}>{session.title}</option>
        })}

      </select>


      <button className='btn btn-primary' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create New Session</button>
    </div>
    {displaySession.map((sec, index) => {

      return <SessionComponent mySession={sec}  key={index} newSessionCreated={newSessionCreated}/>
    })
    }
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Create Session

            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={formHandler} id='sessionForm'>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Session Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Session Name"
                  onChange={titleHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Date:
                </label>
                <select className="form-select" aria-label="Default select example" onChange={dateHandler}>
                  <option defaultValue>Select Date</option>
                  {props.confDates?.map((d) => {
                    return <option value={d} key={d} >{d}</option>
                  })}

                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Location:
                </label>
                <select className="form-select" aria-label="Default select example" onChange={locationHandler}>
                  <option defaultValue>Select Location</option>
                  {props.confLocations?.map((loc) => {
                    return <option key={loc} value={loc}>{loc}</option>
                  })}
                </select>

              </div>



            </form>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={()=>{
                setSessionMessage('')
              }}
            >
              Close
            </button>
            <button type="button" onClick={formHandler} className="btn btn-primary">
              Create Session
            </button>
          </div>
        </div>
      </div>
    </div>


  </>
}