import React from 'react';
import { useState } from 'react';
import '../style.css';

const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmpw] = useState("");

    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErroremail] = useState("");
    const [errorPw, setErrorpw] = useState("");
    const [errorConfirmpw, setErrorconfirmpw] = useState("");

    const [userColor, setUsercolor] = useState("");
    const [emailColor, setEmailcolor] = useState("");
    const [passwordColor, setPasswordcolor] = useState("");
    const [confirmPwColor, setConfirmPwColor] = useState("");

    const validate = (e) => {
        e.preventDefault();
        if(username.length > 8){
            setErrorUsername("");
            setUsercolor("green");
        }else{
            setErrorUsername("Username must be 8 letters long");
            setUsercolor("red");
        };

        if(email.includes('@gmail')){
            setErroremail("");
            setEmailcolor("green");
        }else{
            setErroremail("Email should include @gmail.com");
            setEmailcolor("red");
        };

        if(password.length >= 8){
            setErrorpw("");
            setPasswordcolor("green");
        }else{
            setErrorpw("Password should be 8 letters long");
            setPasswordcolor("red");
        }

        if(password !== '' && password === confirmpw){
            setConfirmpw("");
            setConfirmPwColor("green");
        }else{
            setConfirmpw("Password didn't match");
            setConfirmPwColor("red");
        }
    }
  return (
    <div>
        <div className="card">
            <div className="card-image">
                
            </div>
            <form >
                <input type="text" placeholder='Name' style={{borderColor : userColor}} value={username}  onChange={(e) => setUsername(e.target.value)}/>
                <p className="error">{errorUsername}</p>

                <input type="text" placeholder='Email' style={{ borderColor : emailColor}} value={email} onChange={(e)=>setEmail(e.target.value)} />
                <p className="error">{errorEmail}</p>

                <input type="password" placeholder='Password' style={{ borderColor : passwordColor}} value={password} onChange={(e)=>setPassword(e.target.value)} />
                <p className="error">{errorPw}</p>

                <input type="password"  placeholder='Confirm password' style={{ borderColor : confirmPwColor}} value={confirmpw} onChange={(e)=>setConfirmpw(e.target.value)}/>
                <p className="error">{errorConfirmpw}</p>

                <button className='submit-btn' onClick={validate}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form