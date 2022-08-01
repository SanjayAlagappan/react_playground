import React, { useRef, useState } from 'react'
import './NewEvent.css'


export default function NewEvent({addEvents,events,setShowModal}) {
  
  const [title,setTitle]= useState('');
  const [date,setDate]= useState('');
  const [location,setLocation]=useState('Manchester');
  
 
    // const title=useRef();
    // const date=useRef();

    console.log(setShowModal);
    const handleSubmit=(e)=>{
    
      e.preventDefault();

     
        

      const event={
   
        
          //  title: title.current.value,
          //  date: date.current.value,
          //  id:Math.floor(Math.random()*10000)

         title: title,
         date: date,
         location:location,
         id:Math.floor(Math.random()*10000)

      }

     

      addEvents(event);

      setShowModal(false);

      

    }


   const resetForm=(e)=>{

      e.preventDefault();

      // title.current.value='';
      // date.current.value='';
       
       
       setTitle('');
       setDate('');
       setLocation('manchester');

 
   }



  return (
    
      

      <form className='newEvent' onSubmit={handleSubmit}>

       <label> 
      
       <span>Event-Title:</span>
      
       <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
{/* 
       <input type="text" value={title} ref={title} /> */}
       </label>
        
       <label> Event-Date:

          {/* <input type="date" value={date} ref={date} /> */}
       <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} />

       </label>

       <label> 
       <span>Location: </span>
       
       <select  value={location} onChange={(e)=>{setLocation(e.target.value)}}>

       <option value="manchester">manchester</option>
       <option value="london">london</option>
       <option value="mumbai">mumbai</option>





       </select>
       


       </label>
        
         <button onClick={handleSubmit}>Submit</button>
         
        

         <button onClick={resetForm}>reset</button>

      </form>


  )
}
