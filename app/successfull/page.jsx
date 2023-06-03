'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function successfull() {
  const router = useRouter();
  return (<>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Paper successfully submitted!</strong> 
  
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  />
</div>

<button type="button" onClick={()=>router.back()} className="btn btn-info">Back</button>
</>
  )
}