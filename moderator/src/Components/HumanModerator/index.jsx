import React,{useContext,useState} from 'react'
import {DataContext} from '../../Context/DataProvider'
import './HumanModerator.css'
import ModalWindow from '../ModalWindow/ModalWindow'
const HumanModerator =(props)=> {
  const images = require.context('../../../public/assets', true);
  const [isModalOpen,setModal] = useState(false)
  const [previewData,setPreviewData] = useState({})
 const {
  imageGallery
 } = useContext(DataContext)
 const clickHandler =(el)=>{
  setPreviewData({...el})
  setModal(true);
 }
  return (
    <div>
      <div className='header'>Human Moderation Approval</div>
      <table className='ModeratorGrid'>
        <tbody>
          <tr><td>Image Grid</td><td>Uploaded By</td><td>Uploaded Date/Time</td><td>Other Details</td></tr>
          {imageGallery.map(el=>(
            <tr>
              <td><img width={'140px'} src= {el.src} onClick={()=>clickHandler(el)}/></td> 
              <td>{el.updateBy}</td>
              <td>{el.date}</td>
              <td>{el.otherDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <ModalWindow open={isModalOpen} handleOpen={()=>setModal(true)} handleClose ={()=>setModal(false)} previewData={previewData} />}
    </div>
  )
}
export default HumanModerator