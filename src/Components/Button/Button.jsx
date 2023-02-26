import React, { useEffect, useState } from 'react'
import './Button.css'

function Button() {

  const [uploading, setUploading] = useState(false)
  const [doneUpload, setDoneUpload] = useState(false)

  useEffect(()=>{
    if(uploading){
      setTimeout(()=>{
        setUploading(false)
        setDoneUpload(true)
      }, 8000)
    }
    
    if(!uploading){
      setTimeout(()=>{
        setDoneUpload(false)
      },3000)
    }
  },[uploading])

  return (
    <div>
      <button style={{background: doneUpload ? '#4EC897' : ''}} className={`uploadBtn ${uploading ? 'btnDisable' : ''}`} onClick={()=>setUploading(true)}>
        <div className="iconContainer">
          {
            !doneUpload ? <svg className='uploadIcon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
            <path style={{animation: uploading ? '0.8s linear 0s infinite move' : ''}}  d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"></path>
          </svg> : <svg className='tickIcon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></svg>
          }
        </div>
        {uploading ? 'Uploading' : doneUpload ? 'Uploaded' : 'Upload'}
      </button>
    </div>
  )
}

export default Button