import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

function Register() {
      const [username, setUsername] = useState("")
      const [password, setPassword] = useState("")
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")

      const navigate = useNavigate()

      const handleSubmit = async(e) => {
            e.preventDefault();
            try {
              const {data} = await axios.post("http://localhost:3001/api/auth/register", {
                username,
                password,
                name,
                email
              });
              navigate('/login');
            } catch (err) {
                  console.log(err?.response?.data);
            }
          };
  return (
      <>
      <div className="flex justify-evenly flex-row-reverse h-screen w-screen md:bg-[#2D3B58]" >
        <div className='hidden md:flex m-auto flex-1'>
          <img src='/images/register.jpeg' className='' ></img>
        </div>
      <div className='flex flex-1 items-center p-4 lg:p-10'>
            <div className='flex w-[89vw] bg-white rounded-lg xl:w-[720px] lg:w-[500px]  md:w-[370px] md:justify-center' onSubmit={handleSubmit}>
                  <div className='flex flex-col w-full p-4'>
                        <h1 className='text-black text-xl md:mb-3'>CREATE ACCOUNT</h1>
                        <h3 className='text-slate-600 mt-2'>Join the virtual social network</h3>
                        <form className='flex justify-center flex-col item-center mt-4' onSubmit={handleSubmit}>
                             
                                 <div className=' md:flex justify-evenly'>
                                    <div className='md:mr-2'>
                                          <label className='mb-2'>Name</label>
                                          <input className='w-full h-12 rounded-md p-3 md:mb-8 mb-2 lg:mt-2 border border-black' onChange={e=>setName(e.target.value)} value={name}  type="text" required/>
                                    </div>
                                    <div>
                                          <label className='mb-2'>Email</label>
                                          <input className='w-full h-12 rounded-md p-3 md:mb-8 mb-2 lg:mt-2  border border-black' onChange={e=>setEmail(e.target.value)} value={email} type="email" required/>
                                    </div>
                              </div>
               
                              <div className=' md:flex justify-evenly '>
                                    <div className='md:mr-2'>
                                          <label className='mb-2'>Username</label>
                                          <input className='w-full  h-12 rounded-md p-3 md:mb-8 mb-2 lg:mt-2 border border-black' onChange={e=>setUsername(e.target.value)} value={username}  type="text" required/>
                                    </div>
                                    <div>
                                          <label className='mb-2'>Password</label>
                                          <input className='w-full h-12 rounded-md p-3 md:mb-8 mb-2 lg:mt-2  border border-black' onChange={e=>setPassword(e.target.value)} value={password} type="password" required/>
                                    </div>
                              </div>
                  
                  
                                 <div className='md:flex md:justify-evenly'>
                                 <button className='bg-[#BED7F8] mb-2  lg:w-full w-full  h-10 md:mr-2 hover:bg-[#afd1fd]'>Create account</button>
                                 <Link to="/login"><button className='bg-[#BED7F8] lg:w-56 xl:w-80 w-full h-10 md:w-40 hover:bg-[#afd0fa]'>Login</button></Link>
                                 </div>
                        </form>
                        <h1 className='text-center my-2 text-slate-500'>--------or--------</h1>
                        <div className=' bg-[#2D3B58] text-white flex rounded-lg hover:bg-[#212e49] hover:border '>
                                 <i className="fa-brands text-[#b4c1db] fa-2xl fa-google-plus-g m-auto pl-2"></i>
                                 <button  className=' w-full h-10'>Sign in with google</button>
                        </div>
                  </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default Register