import './Modal.css';
import  ReactDOM  from 'react-dom';


export default function Modal({children,Close}) {
  
  //  const handleClose=(e)=>{
   
  //     if(e.target.className=='modal_back-drop')
  //       Close();


  //  }
  
  return (

    <div className='modal_back-drop' >
      <div className='Main-modal'>

        {children}
        
        {/* <button onClick={Close}>Close X</button> */}
      </div>
   </div>
  )
}

