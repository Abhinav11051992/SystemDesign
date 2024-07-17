import "./App.scss";
import React from "react";
 import Card from'./SystemDesign/Card';
// import SimpleSlider from './caraousel';
import CustomInput from "./SystemDesign/CustomInput";
import FormButton from "./SystemDesign/Button";
import Banner from "./SystemDesign/Banner";
import { useState } from 'react';
import { AiOutlineMail, AiOutlineUser, AiFillLock } from "react-icons/ai";

function App() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [pass, setpass]= useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(!submit)
  }

  return (
    <React.Fragment>
      <Banner text={"This is Banner Image"}/>
      <main>
      <Card Name={"Abhinav"} Designation={"Senior Consultant"} imgPath ={"https://picsum.photos/50/50"}/>
      <Card Name={"Karthik"} Designation={"Consultant"} imgPath ={"https://picsum.photos/51/50"}/>

     
      {(name && designation && pass === "1234" && submit ) && <Card Name={name} Designation={designation} imgPath ={"https://picsum.photos/50/51"}/>}
    
        
      </main>
      <form onSubmit={handleSubmit}>
          <CustomInput
            icon={<AiOutlineUser />}
            type={"text"}
            placeholder={"Enter User Name"}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            icon={<AiOutlineMail />}
            type={"text"}
            placeholder={"Enter your Designation"}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <CustomInput
            icon={<AiFillLock />}
            type={"password"}
            placeholder={"PassKey to Display the details as Card"}
            onChange={(e) => setpass(e.target.value)}
          />
          <FormButton btnText={'Submit'} style={{backgroundColor:"#4d6493"}}/>
        </form>
    </React.Fragment>
  );
}

export default App;
