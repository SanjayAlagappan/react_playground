import './App.css';
import {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEvent from './components/NewEvent';


function App() {

  const[showModal,setShowModal]=useState(false);
  const [showEvents,setShowEvents]=useState(true);
 
  const [events,setEvents]=useState(
[
  {title:"go to grandma's house", id:1}, 
  {title:"go to friend's house", id:2}, 
  {title:"wanna play valo", id:3}

]

  )
  


  let name="sanjay";
  

  console.log(showEvents);

  const deleteEvent=(id)=>{

 
    setEvents((prevEvents)=>
    prevEvents.filter(data=>{
 
      return !(id==data.id);
    }))


    console.log(id); 
  }


  const handleModal=()=>{

     setShowModal(true);

  }

 const handleClick=()=> {

   console.log(events);
  
  }


  const addEvents=(event)=>{

      
     setEvents((prevEvents)=>{

      return [...prevEvents,event]
     })
      


  }
 
  


 
 
  let title="This is our title";
  let subtitle="This is our subtitle";

  return (
    <div className="App">

     <Title title={title} subtitle={subtitle}/>
     <Title title="this is our another new title" subtitle="this is our another new subtitle"/>

     <h1 className='h1'>This is Sanjay's first react app!!!</h1>  
     <h2 className='h2'>That's cool.. Isn't it <i className="fas fa-question"></i></h2>  
     
     {!showEvents && (<button onClick={()=>setShowEvents(true)}>Show Events</button>)}
     {showEvents &&(<button onClick={()=>setShowEvents(false)}>Hide Events</button>)}
     
        
     
     { showEvents && <EventList events={events} deleteEvent={deleteEvent}/>}


     {/* < Modal>
      
      <h1>This is our Modal Component!! </h1>
      <p>This is Sub-Modal XD</p>

     </Modal>  */}



     {showModal && < Modal >
      

        <NewEvent addEvents={addEvents} events={events} setShowModal={setShowModal} />

        

     </Modal> }

     
       
     <button onClick={handleModal}>Add new Event</button>
   
      <button onClick={()=>{console.log(events)}}>Log events</button>



     </div>



  )
}

export default App;
