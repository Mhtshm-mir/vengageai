import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Timepicker from './components/Timepicker';
import 'react-calendar/dist/Calendar.css';



function App() {
  const [value, onChange] = useState(new Date());
 
  
  return (
    <div style={{display:"flex", width:"40%" ,margin:"auto",padding:"20px",border:"1px solid black",marginTop:"60px"}}>
      <Calendar    onChange={onChange} value={value} />
      <Timepicker day={value.toString().split(" ")[0]} />
    </div>
  );
}
export default App