'use client';

import { useState } from 'react';
import Loader from '../Loader';
import { useRouter } from 'next/navigation';
//import { addPaper } from './scripts/API-services';
import { api } from '../scripts/API-services'
export default function SubmitPaper(props) {
  const [universities, setUniversities] = useState(props.uni)
  const [paper, setPaper] = useState({});
  const [paperTitleValid, setPaperTitleValid] = useState(true);
  const [selectedFile, setSelectedFile] = useState();
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState({});
  const [pdfFile, setPdfFile] = useState(null);
  const [flag, setFlag] = useState(false);
  const [isError, setIsError] = useState(false)
  const [filled, setFilled] = useState(false)
  const [message, setMessage] =useState('');
  const [loading, setLoading] = useState(false);
  const [disappear, setDisappear] = useState(true);
    const router = useRouter();
  
  function addAuthor(val) {

    setAuthors((prev) => {
      return [...prev, val];
    });

  }
  async function uploadPDF() {

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Upload successful");
        const data = await response.json();
        return data.paperURL;
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handlePdf(e) {
    const myfile = e.target.files[0];
    setSelectedFile(myfile);

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      setPdfFile(e.target.result);
      setFlag(true)
    }
    fileReader.readAsDataURL(myfile);
  }
  async function fillAuthor(e) {
    e.preventDefault();
   
    setAuthors([...authors, author]);
    setIsError(false)
    setFilled(true)
    setMessage('Author added successfully');
  }


  async function myHandler(e) {
    e.preventDefault();

   
    try {

      setLoading(true)
      const paperURL = await uploadPDF();
      if (paperURL) {
        setPaper((prevState) => {
          return { ...prevState, paperURL, authors }
        })


        const res = await api.addPaper({ ...paper, paperURL, authors });
        setFilled(true)
        setMessage("Paper added successfully")
        setLoading(false)
        console.log(res);
        setDisappear(false);
        
      }

    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }


  return <>
  
   { filled && <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{message}!</strong> 
  
  
</div>}

{loading && <Loader/>}
    <h2 className='mytitle'>Submit Paper Form </h2>
    {isError && <h6 className='invalid'>Please provide the missing fields</h6>}
    {
      disappear &&
    <div className="container mycontainer">
      <div className="myform">
        <form id='paperForm' encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Paper title:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
              required
              onChange={(e) => {
                setPaper({ ...paper, title: e.target.value })
              }}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Abstract:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input placeholder"
              required
              onChange={(e) => {
                setPaper({ ...paper, abstract: e.target.value })
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload your paper as PDF:
            </label>
            <input className="form-control" onChange={handlePdf} type="file" id="formFile" required />

          </div>
          <div className="mb-3 buttonrow">

            <button onClick={myHandler} className="btn btn-primary">Save</button>
            {isError}
          </div>
        </form>

      </div>
      <div className="list">
        {flag && <button className="btn btn-secondary" type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop">

          Add Author</button>}
        <ol className="list-group list-group-numbered">
          {authors.map((item, index) => {
            return <li key={index + 1} className='list-group-item'>{item.firstName}  {item.lastName} </li>
          })}

        </ol>
        {/* {JSON.stringify(paper)} */}
      </div>
    </div>
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
              Author's Information
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">

            <form id='authorForm'>
              <div className="mb-3">

                <label htmlFor="formGroupExampleInput" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input placeholder"
                  required
                  onChange={(e) => {
                    setAuthor({ ...author, firstName: e.target.value })
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Another input placeholder"
                  required
                  onChange={(e) => {
                    setAuthor({ ...author, lastName: e.target.value })
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  E-mail:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Another input placeholder"
                  required
                  onChange={(e) => {
                    setAuthor({ ...author, email: e.target.value })
                  }}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Affiliation:
                </label>

                <select className='form-control' onChange={(e) => {
                  setAuthor({ ...author, affiliation: e.target.value })
                }} >
                  <option>Please Select Univeristy</option>
                  {universities?.map((uni,index) => {
                    return <option key={index} value={uni}>{uni}</option>
                  })
                  }
                </select>

              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setAuthor({ ...author, isPresenter: e.target.checked })
                  }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Is Presenter
                </label>
              </div>

            </form>

          </div>
          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
                  onClick={()=>{setFilled(false)}}
            >
              Close
            </button>
            <button onClick={fillAuthor} type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>


  </>
}

