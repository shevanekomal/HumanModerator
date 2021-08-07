import React from 'react'

const PreviewPage = (props)=> {
  const {
    date,src
  } = props.location.state;
  return (
    <div>
      <div>Image Details</div>
      <img src={src}/>
      <div>Uploaded Date:{date}</div>
      <div>Reason:<input name='reason' type='text' /></div>
      <div>
      <button>Accept</button>
      <button>Delete</button>
      <button>Cancel</button>
      </div>
    </div>
  )
}
export default PreviewPage