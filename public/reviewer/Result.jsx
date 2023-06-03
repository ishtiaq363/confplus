import { useState } from 'react';
//import {api} from './scripts/API-services'
import {api} from '../scripts/API-services';
import Loader from '../Loader';
import { useRouter } from 'next/navigation';
export default function Result(props) {
  const [userID, setUserID] = useState(props.userId);
  const [overallRating, setOverallRating] = useState('');
  const [contribution, setContribution] = useState('');
  const [weakness, setWeakness] = useState('');
  const [strength, setStrength] = useState('');

  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);
  const[message, setMessage] = useState('');

  const router = useRouter();

  async function resultHandler(e){
    e.preventDefault();
  //  fetchResult({overallRating, contribution, weakness, strength})
  if(!overallRating)
  {
    setIsError(true);
    setMessage('Over all rating is not selected')
    return;
  }
  if(!contribution)
  {
    setIsError(true);
    setMessage('please select contribution')
    return;
  }
  console.log(weakness.length)
  if(weakness.length===0)
  {
    setIsError(true);
    setMessage('weakness is not filled')
    return;
  }
  console.log(strength.length)
  if(strength.length===0)
  {
    setIsError(true);
    setMessage('strength field is required')
    return;
  }
  setIsError(false)
  setMessage('')
  try {
    setLoader(true)
    const result = await api.addReview(props.paperid, {userID,overallRating, contribution, weakness, strength})
    console.log(result);
    setLoader(false)
    router.push('/successfull');
  } catch (error) {
    console.log(error);
  }
    
  }

  function evaluationHandler(e){
    setOverallRating(e.target.value)
  }
  function contributionHandler(e){
    setContribution(e.target.value)
  }
  return <>
    <div className='result'><h5>Paper Review</h5></div>


    <form className='result' onSubmit={resultHandler}>
      <hr />
      {isError &&  <p className="invalid">{message}</p> }
      <label className="form-label fw-bold">1- Overall evaluations:</label>
      <fieldset id="group1" onChange={evaluationHandler}>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              
              id="inlineRadio1"
              defaultValue="option1"
              name="group1"
              value={2}
              
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Strong accept
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              
              id="inlineRadio2"
              defaultValue="option2"
              name="group1"
              value={1}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Accept
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              
              id="inlineRadio2"
              defaultValue="option2"
              name="group1"
              value={0}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Borderline
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
             
              id="inlineRadio2"
              defaultValue="option2"
              name="group1"
              value={-1}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Reject
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              
              id="inlineRadio2"
              defaultValue="option2"
              name="group1"
              value={-2}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Strong reject
            </label>
          </div>
        </div>
      </fieldset>
      <hr />
      <label className="form-label fw-bold">2- How was the paper contribution?</label>
      <fieldset id="group2" onChange={contributionHandler}>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              
              id="inlineRadio1"
              defaultValue="option1"
              name="group2"
              value={5}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              A major and significant contribution
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
             
              id="inlineRadio2"
              defaultValue="option2"
              name="group2"
              value={4}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              A clear contribution
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
             
              id="inlineRadio2"
              defaultValue="option2"
              name="group2"
              value={3}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              A minor contribution
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
             
              id="inlineRadio2"
              defaultValue="option2"
              name="group2"
              value={2}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              No obvious contribution
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
             
              id="inlineRadio2"
              defaultValue="option2"
              name="group2"
              value={1}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              No contribution at all
            </label>
          </div>
        </div>
      </fieldset>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
          3. Paper Strengths:
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
          onChange={(e)=>{
            
            setStrength(e.target.value)
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">
          4. Paper Weakness:
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
          onChange={(e)=>{
            
            setWeakness(e.target.value)
          }}
        />
      </div>
      <div className="mb-3 float-end gap-3">
        <button className="btn  m-3">Cancel</button>
        <button className="btn btn-primary  m-3">{props?.review?.length>0 ? 'Update' : 'Save'}</button>
      </div>
    </form>


  </>
}