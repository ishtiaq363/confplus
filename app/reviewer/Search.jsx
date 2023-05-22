export default function Search(){
  return <>
  
  <div className="search">
  <div>Please select a Research paper to review:</div>
  <select className="form-select myselect" aria-label="Default select example">
  <option selected="">All</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>


  </div>
  </>
}
