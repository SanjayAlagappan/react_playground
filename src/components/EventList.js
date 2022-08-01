

export default function EventList({events,deleteEvent}) {
  return (
    <div>

   { events.map((event,index)=>(

   <div key={event.id}>

    <h1>{index}-{event.title}</h1>
    <p> {event.date}</p>
    <p> {event.location}</p>
    
    
     <button onClick={()=>{
       deleteEvent(event.id);
       }}>delete Event</button>

      </div>
)) 
    }

    </div>
  )
}
