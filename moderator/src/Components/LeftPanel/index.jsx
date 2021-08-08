import {useState} from 'react'
import history from '../../Context/history';
import { Link } from "react-router-dom";
const LeftPamel = () => {
  const [classes,setClasses] =useState({
    Home:'active',
    Uploads:'',
    Moderator:''
  })
  const clickHandler = (name) =>{
    setClasses({
      Home:'',
      Uploads:'',
      Moderator:'',
      [name]:'active'
    })
    let pathname = name === 'Home' ? '/' : name.toString().toLowerCase()
    history.push({pathname})
  }
  return (
   <>
    <div className='leftPanelHeader'>The Gaming Hub</div>
      <div  className={classes.Home}  onClick={() => clickHandler('Home')} >
        <Link to='/'>Home</Link> 
      </div>
      <div className={classes.Uploads} onClick={() => clickHandler('Uploads')}>
      <Link to='/uploads'>Gallery Uploads</Link>
      </div>
      <div className={classes.Moderator} onClick={() => clickHandler('Moderator')}>
      <Link to='/moderator'>Gallery Moderator</Link>
      </div>
      {/* <div className={classes.Uploads} onClick={()=>clickHandler('Uploads')}>Gallery Uploads</div>
      <div className={classes.Moderator} onClick={()=>clickHandler('Moderator')}>Gallery Moderator</div> */}
   </>
  )
}
export default LeftPamel

