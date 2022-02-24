import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {


    //for alert messege
    const [alert, setAlert] = useState(null)

    const showAlert = (messege,type) =>{
      setAlert({
          msg: messege,
          type: type
         })

        setTimeout(() => {
          setAlert(null);
        }, 2000);
     
    }



    const [mode, setMode] = useState("light")  

  
  const toggle=() =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#10195c"
      showAlert(" Dark mode is enebled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" light mode is enebled", "success")

    }
  }

const [greenMode, setGreenMode] = useState("light")

const greenToggle = () => {
  if(greenMode===("light")){
    setGreenMode("dark")
    document.body.style.backgroundColor = "#0d683e"
    showAlert(" Green mode is enebled", "success")

  }

  else{
    setGreenMode("light")
    document.body.style.backgroundColor = "white"
    showAlert(" Green mode is enebled", "success")

  }

}

const [redMode, setRedMode] = useState("light")

const redToggle = () => {
  if(redMode=== "light"){
    setRedMode("dark")
    document.body.style.backgroundColor = "#751323"
    showAlert(" Red mode is enebled", "success")

  }
  else{
    setRedMode("light")
    document.body.style.backgroundColor = "white"
    showAlert(" Red mode is enebled", "success")

  }
}




  return (
  <>
  {/* <Router> */}
    <Navbar title= "Cosmatics" aboutText="Contact Us" link="Sign Up" mode={mode} toggleMode={toggle} greenMode={greenMode} toggleGreenMode={greenToggle} redMode={redMode} toggleRedMode={redToggle}/>

    <Alert alert={alert}/>
       
    <div className="container">
          {/* <Switch>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/"> */}
                <TextForm showAlert={showAlert} mode={mode} toggleMode={toggle}/>
              {/* </Route>
          
          </Switch> */}
    </div>

    {/* </Router> */}
    </>
    );

}

export default App;
