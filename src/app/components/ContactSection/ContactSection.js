'use client'
import { useEffect, useState } from "react";
import AnimationCard from "../AnimationCard/AnimationCard";
import styles from "./style.module.css";

export const ContactSection = () => {

    const [success, setSucess] = useState(false);


    const [notValid, setNotValid] = useState(false);

    const [form,setForm] = useState({
        name:"",
        phone:'',
        email:"",
        msg:''
    })
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        if(notValid){
            if(form.name !=="" && form.email !== "" && form.msg !== ""){
                setNotValid(false);
            }
        }

    },[notValid,form])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setSucess(false);
        if(form.name === "" || form.email === "" || form.msg === ""){
            setNotValid(true);
            return;
        }
        setNotValid(false);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        form,
        section: "contact"
      })
    })
    const res = await response.json();
    console.log(res);
    if(res.message === "Email Sent Successfully"){
        setForm({
        name:"",
        phone:'',
        email:"",
        msg:''
        })
        setSucess(true);
    }
    }
    return (
        <div className={styles.contactSection}>
             <AnimationCard>
            <div className={styles.formDes}>
               
                <h1>Contact Us</h1>
                <p>Contact us today and let’s bring your ideas to life.</p>
           
            </div>
            </AnimationCard>
            <div className={styles.form}>
                <div>
                    <div>Full Name</div>
                    <input value={form.name} name='name' onChange={handleChange}/>
                </div>
                <div>
                    <div>Email</div>
                    <input value= {form.email} name='email' onChange={handleChange}/>
                </div>
                <div>
                    <div>Phone</div>
                    <input value ={form.phone} name="phone" onChange={handleChange}/>
                </div>
                <div>
                    <div>Message</div>
                    <textarea value={form.msg} name="msg" onChange={handleChange}/>
                </div>
                <p>{success ? <p style={{color:"green",textAlign:"center",fontWeight:"bold"}}>Success! Message Sent</p>:""}</p>
                <p>{notValid ? <p style={{color:"red",textAlign:"center",fontWeight:"bold"}}>PLease Fill all fields</p>:""}</p>
                <div className={styles.sendBtn} onClick={handleSubmit}>
                    Send
                </div>
            </div>
        </div>
    )
}