'use client'
//import Search from './Search';
//import PaperReviewForm from './PaperReviewF
import { api } from '../../public/scripts/API-services'
import Search from '../../public/reviewer/Search';
import PaperReviewForm from '../../public/reviewer/PaperReviewForm';
import { useEffect, useState } from 'react';
import Loader from '@/public/Loader';
//import { useEffect } from 'react';
function Page() {
  const [paperData, setPaperData] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null)
  const [loading, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [serverError, setServerError] = useState(false);
  const [userType, setUserType] = useState({})


  function updatepaper(val) {
    const data = paperData.filter((p) => {

      return p.id === parseInt(val);
    })
    setSelectedPaper(...data);

  }


  useEffect(() => {
    setServerError(false)
    setMessage('')
    async function mydata() {
      try {

        setLoader(true)
        const user = JSON.parse(window.localStorage.getItem('myuser'))
        setUserType(user);
        setPaperData(await api.getPaperByReviewerId(parseInt( user?.id)));
        setLoader(false)
       console.log(user?.id)
      }
      catch (error) {
        setMessage(error);
        setLoader(false)
        setServerError(true);
      }


    }
    mydata();
  }, [])



  return <>

    <article>
      {
      serverError &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{message}</strong> 
        
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
      }
      <h3>Papers to review </h3>

      {loading ? <Loader /> : <Search paperForSearch={paperData} select={updatepaper} />}

    </article>
    {selectedPaper && <PaperReviewForm data={selectedPaper} userId={userType?.id} />}

    {paperData.length===0 && !loading && <h4 className='infoMessage'>No Paper Found for Review. Thanks</h4>}
  </>
}
export default Page;

