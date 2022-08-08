import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useLoginMutation } from "../services/api";
import {setStorage}  from "../services/utils" 
import logo from '../img/kv logo.png'

const Login = () => {

    const [getToken, result] = useLoginMutation();

    const [state, setState] = useState(
        {
          username:'',
          password:'',
        }
      );

    const navigate = useNavigate();

    useEffect(()=>{
        if(result.isSuccess){
            setStorage("idToken",result.data.data.idToken)
            navigate('/list')
        };
            
    },[result])

    const onChangeValue = (key,value) => {
        setState(
          {...state,
          [key]:value}
        )
      }

    return(
        <>
          <main className="loginmain">
            <div className="firsthalf">
              <div></div>
            </div>
            <div className="secondhalf">
              <img src={logo} />
              <InputField placeholder={'Username'} onChange={(value)=> onChangeValue("username",value)}/>
              <InputField placeholder={'Password'} onChange={(value)=> onChangeValue("password",value)}/>
              <button onClick={()=>{getToken(state)}}>Login</button>
            </div>
          </main>
        </>
    );
};

export default Login;