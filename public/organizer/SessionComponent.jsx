import React, { useState } from 'react'

import ShowPresentations from './ShowPresentations'

import { api } from '../scripts/API-services'
function SessionComponent(props) {
  const [dataOfAcceptedPapers, setdataOfAcceptedPapers] = useState([]);
  const [sid, setSId] = useState(`accordionFlushExample${props.mySessions?.id}`)
  //const [present, setPresent] = useState([])
  const [presentation, setPresentation] = useState({});
  //const [session, setSession] = useState(...props?.mysession)
  const[message, setMessage]=useState('')


 
  async function savePresentation(e) {
    e.preventDefault();
    setMessage('')
    try {
      const resp = await api.addPresentation(parseInt(e.target.value), presentation);
      setIsNewSessionCreated(!isNewSessioCreated);
      setMessage('Presentation added')
      console.log(resp);
    } catch (error) {
      console.log(error)
    }
    props.newSessionCreated(1)
    
    console.log(presentation)
  }


  async function fetchAcceptedPapers() {
    try {
      setdataOfAcceptedPapers(await api.getAcceptedPapers())
      console.log(dataOfAcceptedPapers)
    } catch (error) {
      console.log(error)
    }
  }

  return (<>
    { message.length>0 &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{message}</strong> 
    
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    />
  </div> }
    <div className="paperholder" key={props.mySession?.id}>
      <div className="accordion accordion-flush" id={'accordionFlushExample' + props.mySession?.id.toString()}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={"flush-headingOne" + props.mySession?.id.toString()}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              onClick={fetchAcceptedPapers}
            >


              <div className="container">
                <div className="row">
                  <div className="col-7">Title:   {props.mySession?.title}</div>
                  <div className="col-2 location"><p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-fill" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>  {props.mySession?.date} </p></div>
                  <div className="col-3 location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg> {props.mySession?.location}
                  </div>
                </div>
              </div>

            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body myAccordian">
              <div className='container'>
                <div className="row">
                  <div className="col-5">
                    <p>
                      <button
                        className="btn m-2 btn-info"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        onClick={fetchAcceptedPapers}
                      >
                        New Presentation

                      </button>



                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body ">
                        <div className="row">
                          <div className="col-12">
                            <form className="row g-3" id="presentationForm">
                              <div className="col-md-12">

                                <select className="form-select" aria-label="Default select example"
                                  onChange={(e) => {
                                    setPresentation({ ...presentation, paperId: e.target.value })
                                  }} >
                                  <option defaultValue>Select Research Paper</option>
                                  {dataOfAcceptedPapers.map((accpPaper) => {
                                    return <option key={accpPaper.id} value={accpPaper.id}>{accpPaper.title}</option>
                                  })}
                                </select>
                              </div>
                              <div className="col-md-12">

                                <input type="time" className="form-control"
                                  onChange={(e) => {
                                    setPresentation({ ...presentation, startTime: e.target.value })
                                  }} />

                              </div>
                              <div className="col-12">

                                <input
                                  type="time"
                                  className="form-control"

                                  placeholder="1234 Main St"
                                  onChange={(e) => {
                                    setPresentation({ ...presentation, enddTime: e.target.value })
                                  }}
                                />
                              </div>
                              <div className="col-12">
                                <button value={props.mySession?.id} onClick={savePresentation} type="button" className="btn btn-primary float-end">
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <ShowPresentations acp={dataOfAcceptedPapers} mps={props?.mySession} noOfPresentation={props.mySession?.presentations?.length} />


                  </div>
                </div>



              </div>


              <div className='paperResult'>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default SessionComponent