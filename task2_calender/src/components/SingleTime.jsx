import React, { useEffect, useState } from 'react'
import TimeBox from './TimeBox'

function SingleTime({day}) {
    const [background,setBackground] = useState([])

    useEffect(()=>{
        if(day=="Mon" || day=="Tue" || day=="Wed" || day=="Thu" || day=="Fri"){
            setBackground(["white","white","gray","white","white","white","white","white","white"])
            }else if(day=="Sat"){
                setBackground(["white","white","gray","gray","white","white","white","gray","gray"])
            
            }else{
                setBackground(["gray","gray","gray","gray","gray","gray","gray","gray","gray"])

            }
            
    },[day])



  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
      <div>

    <TimeBox time={"8:00 AM"} bg={background[0]}/>
    <TimeBox time={"9:00 AM"} bg={background[1]} />
    <TimeBox time={"12:30 AM"} bg={background[2]}/>
    <TimeBox time={"5:30 AM"} bg={background[3]}/>

      </div>

      <div>
      <TimeBox time={"8:30 AM"} bg={background[4]}/>

      </div>
     

      <div>
      <TimeBox time={"8:45 AM"} bg={background[5]}/>
      <TimeBox time={"12 Noon"} bg={background[6]}/>
      <TimeBox time={"5:00 PM"} bg={background[7]}/>
      <TimeBox time={"8:30 PM"} bg={background[8]}/>

      </div>
    </div>
  )
}

export default SingleTime
