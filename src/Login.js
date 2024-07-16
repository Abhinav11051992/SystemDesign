import CustomInput from "../SystemDesign/CustomInput";
import FormButton from "../SystemDesign/Button";
import { AiOutlineMail, AiOutlineUser, AiFillLock } from "react-icons/ai";

function App() {
    return (
      
        <form>
            <CustomInput
              icon={<AiOutlineUser />}
              type={"text"}
              placeholder={"Enter User Name"}
            />
            
            <CustomInput
              icon={<AiFillLock />}
              type={"password"}
              placeholder={"Enter your Password"}
            />
            <FormButton btnText={'Click to Proceed'} style={{backgroundColor:"#4d6493"}}/>
          </form>

    );
  }
  
  export default App;
  