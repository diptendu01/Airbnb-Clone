import React, {useState} from 'react'
import airbnb from "../images/airbnb.png"
import search from "../images/search.png"
import menu from "../images/menu.png"
import user from "../images/user.png"
import Signup from './Signup'
import Login from './Login'

const Navbar = () => {
  const [popUp, setPopUp]= useState(false)
  const[sign,setSign] = useState(false)
  const [log,setLog] = useState(false)
  return (
    <div className = 'flex items-center p-3 border border-b-gray-200'>
        <img src ={airbnb} className = 'w-40 h-15 ml-7' />
        <div className = 'ml-auto flex items-center rounded-full border border-gray-300 shadow-md p-1' >
        <input type="text" id="first_name" className="  text-gray-900 text-sm rounded-full block w-full p-2.5 outline-none" placeholder="Add Place" required />|
        <input type="text" id="first_name" className="  text-gray-900 text-sm rounded-full block w-full p-2.5 outline-none" placeholder="Add Date" required />|
        <input type="text" id="first_name" className="  text-gray-900 text-sm rounded-full block w-full p-2.5 outline-none" placeholder="Add Guest" required />
        <img src = {search} className = 'w-10 h-10'/>
        </div>
          <div onClick={()=> setPopUp(!popUp)} className = 'cursor-pointer flex items-center border border-spacing-1 rounded-3xl p-2 ml-auto '>
           {popUp && <div className = 'shadow-xl h-16 w28 z-10 absolute bg-white mt-32 p-1' >
              <h1 onClick= {()=> setSign(true)} className = 'font-semibold text-sm'> Sign up </h1>
              <hr className ='mt-2'/>
              <h1 onClick= {()=> setLog(true)} className = 'font-thin '>Login</h1>
            </div>} 
            <img src ={menu} className = 'w-5 h-5' />
            <img src ={user} className = 'w-8 h-8' />
         </div>
         {sign && <Signup setSign ={setSign} />}
         {log && <Login setLog = {setLog}/>}
      </div>
  )
}

export default Navbar