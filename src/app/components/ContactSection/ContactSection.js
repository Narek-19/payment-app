'use client'
import { useState } from "react";
import AnimationCard from "../AnimationCard/AnimationCard";
import styles from "./style.module.css";

export const ContactSection = () => {

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

    const handleSubmit = async()=>{
        e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message
      })
    })
    console.log(await response.json())
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
                    <input name='name' onChange={handleChange}/>
                </div>
                <div>
                    <div>Email</div>
                    <input name='email' onChange={handleChange}/>
                </div>
                <div>
                    <div>Phone</div>
                    <input name="phone" onChange={handleChange}/>
                </div>
                <div>
                    <div>Message</div>
                    <textarea name="msg" onChange={handleChange}/>
                </div>
                <div className={styles.sendBtn} onClick={handleSubmit}>
                    Send
                </div>
            </div>
        </div>
    )
}