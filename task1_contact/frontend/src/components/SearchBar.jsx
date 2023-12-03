import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../features/Contacts/contactSlice';

function SearchBar() {
  const dispatch=useDispatch()
  const handleSearch = (event) => {
    const query = event.target.value.trim()
    dispatch(getContacts({query}));
   
  };
  return (
    <>
            <input onChange={handleSearch} className='w-[100%] p-[14px] border-[2px] mb-2 ' type="search" placeholder='search contacts ' />

    </>
  )
}

export default SearchBar
