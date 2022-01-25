
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import svg from '../../assests/undraw_save_to_bookmarks_re_8ajf.svg';
import {currentUserAdded, userAdded} from '../../redux/actions';
import store from "../../redux/store";
import React, { Component, MouseEvent } from 'react';




export default function Login() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, seterrors] = useState<string[]>([ ]);
  const [isLogin, setisLogin] = useState(false);

  function Submit(e:MouseEvent) {
    e.preventDefault();
    console.log(name, email);
    store.dispatch(userAdded({ name, email, address, password }));
    store.dispatch(currentUserAdded({ name, email, address}));
    navigate("/");
  }


  function submitSignUp(e:MouseEvent) {
    e.preventDefault();
    console.log("errors", errors);
  
    if(!isLogin){
    let isPresent = false;
    const Data = [...store.getState().allUsers];
    console.log('data', Data);
    Data.forEach((ele) => {
      if (ele.email === email) isPresent = true;
    });
    isPresent &&  alert("already present");
    validateS() && !isPresent && Submit(e);
  }
  else{
    let isPresent=false;
    const Data = [...store.getState().allUsers];
    validateL();
    Data.forEach((ele) => {
      if(ele.email === email && ele.password !== password) {seterrors(["incorrect password"]); isPresent= true;}
      if (ele.email === email && ele.password === password)  navigate("/");
     
    });
    if(!isPresent) seterrors(['user not registered']);
  }
  }


  function validateS() {
    let errorMsg = [];
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      confirmPassword === ""
    ) {
      errorMsg.push("Please fill all datas");
    }
    var patternPassword = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
    );
    var patternEmail = /^\w+@\w+\.\w{2,3}$/;
    if (!patternEmail.test(email) && email && password) {
      errorMsg.push("Incorrect Email");
    }
    if (!patternPassword.test(password) && email && password) {
      errorMsg.push(
        "Passwords should have at least one uppercase letter, numbers and a special character"
      );
    }
    if (password && confirmPassword && password !== confirmPassword) {
      errorMsg.push("Passwords doen't match");
    }
    seterrors([...errorMsg]);
    return errorMsg.length ? false : true;
  }
  function validateL() {
    let errorMsg = [];
    if(email=== '' || password === '') {errorMsg.push("Please fill all datas"); }
    var patternPassword = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
    );
    var patternEmail = /^\w+@\w+\.\w{2,3}$/;
    if (!patternEmail.test(email) && email && password) {
      errorMsg.push("Incorrect Email");
    }
    if (!patternPassword.test(password) && email && password) {
      errorMsg.push(
        "Passwords should have at least one uppercase letter, numbers and a special character"
      );
    }
    seterrors([...errorMsg]);
    return true;
  }

  return (
    <div className="form_wrap">
      <div className="svg">
        <img src={svg} />
        </div> 
      
     
      <div className="login">
        {errors.length > 0 && <p>Error! {errors[0]}</p>}

        {!isLogin ? <h1>Sign-Up</h1> : <h1>Log-In</h1>}
        <form className="login-form">
          {!isLogin && (
            <div className="name-input">
              <label htmlFor="name"> Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Type your name"
                required={true}
              />
            </div>
          )}

          <div className="email-input">
            <label htmlFor="Email"> Email</label>
            <input
              id="Email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Type your ID"
              required={true}
            />
          </div>
          {!isLogin && (
            <div className="address-input">
              <label htmlFor="address"> Address</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Type your address"
                required={true}
              />
            </div>
          )}
          <div className="password-input">
            <label htmlFor="Password"> Password</label>
            <input
              id="Password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Type your Password"
              required={true}
            />
          </div>
          {!isLogin && (
            <div className="confirm-password-input">
              <label htmlFor="confirm-password"> Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="Type your confirm-password"
                required={true}
              />
            </div>
          )}
          <div className="button_wrap">
            {" "}
            <div className="login-button">
              <button id="Login_Button" type="submit" onClick={submitSignUp}>
                {!isLogin ? "Sign-Up" : "Log-In"}
              </button>
            </div>
            <h4>Or</h4>
            <div className="logOrSign" onClick={() => {setisLogin(!isLogin); seterrors([])}}>
              {!isLogin ? <p>Log-In</p> : <p>Sign-Up</p>}
            </div>
          </div>
        </form>
      </div>
      </div>
    
  );
  
}





