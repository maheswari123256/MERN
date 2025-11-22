import React,{useState} from'react'
import PopupForm from'./Components/PopupForm';
const App=() =>{
  const [show,setShow]=useState(false);
    const fromClose=()=>{
      setShow(false);
    }
   return(
    <div>
      {show?<PopupForm closeForm={fromClose}/>:
      (
        <button onClick={()=>setShow(true)}>open form</button>
      )}
    </div>
   ) 
}


export default App;
