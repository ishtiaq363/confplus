export default function Result() {
  return <>
    <div className='result'><h5>Paper Review</h5></div>
    
    
    <form  className='result'>
    <hr  />
    <label className="form-label fw-bold">1- Please evaluate the research paper according to these choices:</label>
      <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          defaultValue="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Strongly accept
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          Accept
        </label>
      </div>
      
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        Borderline
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        Borderline
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        Borderline
        </label>
      </div>
      </div>
      <hr/>
      <label className="form-label fw-bold">2- How was the paper contribution?</label>
        <div>
        <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          defaultValue="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
        A major and significant contribution
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        A clear contribution
        </label>
      </div>
      
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        A minor contribution
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        No obvious contribution
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
        No contribution at all
        </label>
      </div>
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
           3. Paper Strengths:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
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
            />
          </div>
          <div className="mb-3 float-end gap-3">
          <button className="btn  m-3">Cancel</button>
            <button className="btn btn-primary  m-3">Save</button>
          </div>
        </form>
   

  </>
}