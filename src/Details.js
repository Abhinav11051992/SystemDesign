import "./App.scss";
import React from "react";
 import Card from'../SystemDesign/Card';
// import SimpleSlider from './caraousel';
import CustomInput from "../SystemDesign/CustomInput";
import FormButton from "../SystemDesign/Button";
import Banner from "../SystemDesign/Banner";
import { useState } from 'react';
import { AiOutlineMail, AiOutlineUser, AiFillLock } from "react-icons/ai";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <React.Fragment>
      <Banner text={"This is Banner Image"}/>
      <main>
      <Card Name={"Abhinav"} Designation={"Senior Consultant"} imgPath ={"https://picsum.photos/50/50"}/>
      <Card Name={"Karthik"} Designation={"Consultant"} imgPath ={"https://picsum.photos/51/50"}/>
        
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
            placeholder={"Enter your Email"}
          />
          <CustomInput
            icon={<AiFillLock />}
            type={"password"}
            placeholder={"Enter your Password"}
          />
          <FormButton btnText={'Submit'} style={{backgroundColor:"#4d6493"}}/>
        </form>
    </React.Fragment>
  );
}

export default App;
