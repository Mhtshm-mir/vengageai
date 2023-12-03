import { useState } from 'react'
import SideBar from '../components/SideBar'
import Contact from '../features/Contacts/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
<SideBar/> 
<Contact/>      
    </div>
  )
}

export default App
