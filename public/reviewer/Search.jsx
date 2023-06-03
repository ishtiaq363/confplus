import { useState } from 'react'

export default function Search({...props}) {
  
  const [searchData, setSearchData] = useState(props.paperForSearch)
  function onchangeHandler(e){
    if(e.target.value==='0')
    return;
    props.select(e.target.value)
   
  }
  
  return <>

    <div className="search">
      <div>Please select a Research paper to review:

      </div>
      <select className="form-select myselect" aria-label="Default select example" onChange={onchangeHandler}>
        <option value='0'>Select Paper to review</option>
        {[...props.paperForSearch].map((paper)=>{
          return         <option key={paper.id} value={paper.id}>{paper.title}</option>
        })}
        
      </select>
      
    </div>
  </>
}
