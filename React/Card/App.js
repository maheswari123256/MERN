
import Card from'./Components/Card';
import phr from'./assets/img/OIP.jpg'
import './App.css';
const App=() =>{
  return(
    
        <div className="card-container">
      <Card title="Medicin change"  description={<>img elements must have an alt prop,<br />either with meaningful text,<br/> or an empty string</>} 
        src={phr} 
      />
      <Card src={phr} title={"Medicin Change"} description={<>img elements must have an alt prop,<br/>either with meaningful text ,<br/>or an empty string</>}/>

    </div>)
  export default App;
