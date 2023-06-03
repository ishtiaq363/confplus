export default  function Display(props){
  const [dAuthor, setdAuthor]= [props?.authors]
  return <>
   <h4>Authors</h4>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">E.mail</th>
      <th scope="col">Affiliation</th>
    </tr>
  </thead>
  <tbody>
    { props?.authors.map((item,index)=>{
      return <tr  key={index+1}>
      <th scope="row">{index+1}</th>
      <td>{item.firstName}</td>
      <td>{item.email}</td>
      <td>{item.affiliation}</td>
      
    </tr>
    })}
    
   
    
  </tbody>
</table>
  </>
}