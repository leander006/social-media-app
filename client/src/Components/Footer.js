import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { unClicked } from '../redux/Slice/userSlice';


function Footer() {
        const [visible, setVisible] = useState(true);
        const {allPost} = useSelector(state=>state.post)
        const navigate = useNavigate()
        const dispatch = useDispatch();
        const explore= (e) =>{
                e.preventDefault();
                dispatch(unClicked())
                setVisible(!visible);
                navigate("/explore")
          }
  return (
    <div className={allPost?'flex items-center bg-[#BED7F8] h-10 md:hidden justify-between p-2  w-screen':'flex items-center bg-[#BED7F8] h-10 md:hidden justify-between fixed bottom-0 p-2  w-screen'}>
           
          <div className='cursor-pointer'>
                  <Link to ="/home" ><i  className="fa-solid fa-xl fa-house"></i></Link>  
          </div>

          <div className='cursor-pointer'>
                  <Link to ="/chat" ><i  className="fa-solid fa-xl fa-comment"></i></Link>
          </div>

          <div className='cursor-pointer'>
                  <Link to ="/explore" ><i  className="fa-solid fa-xl fa-circle-play" onClick={explore}></i></Link>
          </div>

          <div className='cursor-pointer'>
                  <Link to ="/savedPost" ><i  className="fa-solid fa-xl fa-bookmark"></i></Link>
          </div>

          <div className='cursor-pointer'>
                  <Link to ="/like" ><i  className="fa-solid fa-xl fa-heart"></i></Link>
          </div>

          <div className='cursor-pointer'>
                  <Link to ="/profile" ><i  className="fa-solid fa-xl fa-user"></i></Link>
          </div >
    </div>
  )
}

export default Footer