// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import From from './components/From';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alert from './components/Alert';


  
function App() {

const [mode, setmode] = useState('light')

const toggleMode = () =>{
    if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor = 'black';
        showAlert( 'Darkmode is enable','success')
        document.title = 'TextUtils-DarkMode'
    }else{
        setmode('light')
        document.body.style.backgroundColor = 'white';
        showAlert('LightMode is Enable', 'success')
        document.title = 'TextUtils-LightMode'
    } 

}


const [alert, setalert] = useState(null)

const showAlert= (massage, type) => {
   setalert({
       msg : massage,
       type : type,
   })
   setTimeout(() => {
       setalert(null)
   }, 1500);
}
    return ( 
<>

    <Navbar title = "TEXTutils" aboutText = "About Us" mode={mode} toggle={toggleMode}/>
    <Alert alert={alert}/>
   <div class = "container" my = "5">

       
          {/* <About heading = "About Us"/> */}
        
        
          <From showAlert= {showAlert} heading = "Enter your text" mode={mode} />   
          

      
 </div>

</>
    );
}



export default App;

