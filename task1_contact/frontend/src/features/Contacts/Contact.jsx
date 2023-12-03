import React, { useEffect } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import SearchBar from '../../components/SearchBar';
import { FcContacts } from "react-icons/fc";
import ContactList from '../../components/ContactList';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {getContacts} from "./contactSlice"
function Contact() {
const dispatch= useDispatch()
const contacts = useSelector((state)=>state.contacts.contacts)
    useEffect(()=>{
      dispatch(getContacts({}))
    },[])
  return (
    <div className=' w-[95%]'>
        <div className=' sm:w-[70%] md:w-[50%] ml-5 mt-2 '>

        <p className='text-2xl text-center p-[18px] border-[1px] shadow-2xl font-serif flex items-center justify-center gap-1 '><FcContacts/>PhoneBook</p>
        <Link to="/form"> <button   className='bg-blue-700 text-white block w-[100%] flex items-center gap-2 p-[14px] mb-2 '><FaRegPlusSquare/>Add Contact</button>
        </Link> 
      <SearchBar/>
      {
        contacts.length>0 && (
          contacts.map((el)=>(
            <ContactList key={el._id} address={el.address} avatar={el.avatar} dob={el.dob} email={el.email} name={el.name} occupation={el.occupation} id={el._id}/>


          ))


        )


      }
        </div>
             
    </div>
  )
}

export default Contact
