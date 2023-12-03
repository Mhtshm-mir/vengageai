import React, { useState } from 'react'
import { MdOutlineEdit,MdDeleteOutline } from "react-icons/md";
import {deleteContacts} from "../features/Contacts/contactSlice"
import {useDispatch,useSelector} from "react-redux"
import ModalForm from './ModalForm';
function ContactList({address,avatar,id,name,email,occupation,dob}) {
  const dispatch = useDispatch()
  const [openModal,setOpenModal]= useState(false)
  return (
    <>
    {
      !openModal && (

        <section className='bg-blue-500 w-[100%] h-[70px]  mb-4 flex items-center justify-around'>
        
        <img className=' h-[80%] ' src={avatar}  />
      
      <div>
        <h1>{name}</h1>
        <p className='hidden lg:inline'>{occupation}</p>
      </div>
    <div className='hidden md:inline'>
        <h1>{address}</h1>
    </div>

 

    <div className='flex gap-2'>
    <button onClick={()=> setOpenModal(!openModal)}><MdOutlineEdit/></button>
    <button onClick={()=> dispatch(deleteContacts({id}))}><MdDeleteOutline/></button>
    </div>
   
    </section>

      )


    }
    


{

  openModal && (
    <section >

    <ModalForm setOpenModal={setOpenModal} openModal={openModal} key={id} address={address} avatar={avatar} dob={dob} email={email} name={name} occupation={occupation} id={id} />


    </section>

  )
}
   
    </>
  )
}

export default ContactList
