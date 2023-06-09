import { useState } from 'react';
import Display from './Display';
import Result from './Result';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function PaperReviewForm(props) {
  const [reviews, setReviews]=useState({})
  const [paperurl, serUrl]= useState('http://localhost:3000'+props.data?.paperURL)
const router= useRouter();
  return <>

    <div className="paperholder">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
            Title:   {props.data?.title}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body myAccordian">
              <div className='paperInfo'>
                <p>
                  <button
                    className="btn m-2 btn-info"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Abstract <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                  </button>
                 <button
                    className="btn btn-info m-2"
                    type="button"
                    
                    onClick={
                      (e)=>{ 
                        e.preventDefault();
                      //  router.push(paperurl, undefined, { target: '_blank' })
                      }}
                  >
                   
            <Link download={true} href={props.data?.paperURL} locale={false}>        View PDF <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-binoculars-fill" viewBox="0 0 16 16">
  <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
</svg></Link>

                  </button>


                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                  {props.data?.abstract}
                  </div>
                </div>
               
              <Display authors={props.data?.authors}/>

              </div>


              <div className='paperResult'>
                <Result paperid={props.data?.id} userId={props.userId}   review={props.data?.review}/>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </>
}