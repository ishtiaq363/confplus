import React, { useEffect, useState } from 'react'

function Presenter(props) {
 const [paper, setPaper] =useState({})
 const[paperId, setPaperId] = useState(props.paperId)
 const[presenter , setPresenter]= useState('')
 
 

 useEffect(()=>{
  async function getPaper(){
   setPaper(... props.apList.filter(p=>{
      return p.id ===parseInt(props.paperId)
     }
     )
      )
     
setPresenter(paper?.authors?.filter(item=> item.isPresenter===true))
      
    //  const authors = paper?.authors
    //  setPresnter(paper?.authors.filter(item=>{
    //   return item.isPresenter === true
    // }))

  
  }
  getPaper()
 }
 ,[])
  return (
   <>
   {/* {JSON.stringify(paper)} */}
    <h5 className="card-title">{paper?.title}</h5>
          <h4 className="card-text">

          {paper?.authors?.[0].firstName}
            </h4>
   </>
  )
}

export default Presenter