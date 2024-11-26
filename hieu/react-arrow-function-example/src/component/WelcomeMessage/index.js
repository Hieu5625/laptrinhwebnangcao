import { useState } from "react";
import './WelcomeMessage.css'
const WelcomeMessage = () => {
  const [name, setName] = useState("");
  const [message, setmessage] = useState("");


  const handleOnChange=(e)=>{
    setName(e.target.value);
  }
  const handleOnCilck = (e) =>{
    setmessage(`Xin Chào, ${name} đã đến với chúng tôi`) 
  }
  return(
    <>
      <div>
        <input type="text" placeholder="Nhập Tên của bạn" value={name} onChange={handleOnChange}/>
        <button onClick={handleOnCilck}>Chào Mừng</button>
        {message&&<p>{message}</p>}
      </div>
    </>
  );
};
export default WelcomeMessage;