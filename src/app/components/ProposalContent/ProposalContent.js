import {useState,useEffect} from 'react';
import styles from "./style.module.css";

export const ProposalContent = () => {
  const [form,setForm] = useState({
    name:"",
    lname:'',
    email:"",
})

const [success, setSucess] = useState(false);


const [notValid, setNotValid] = useState(false);
  

const handleChange=(e)=>{
  setForm({
      ...form,
      [e.target.name]:e.target.value
  })
}

useEffect(()=>{
  if(notValid){
      if(form.name !=="" && form.lname !== "" && form.email !== ""){
          setNotValid(false);
      }
  }

},[notValid,form])


const handleSubmit = async(e)=>{
  e.preventDefault();
  setSucess(false);
  if(form.name === "" || form.email === "" || form.lname === ""){
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
  section: "proposal"
})
})
const res = await response.json();
console.log(res);
if(res.message === "Email Sent Successfully"){
  setForm({
  name:"",
  lname:'',
  email:"",
  })
  setSucess(true);
}
}


  return (
    <>
      <div className={styles.section}>
        <p>
        Get expert online support to find the right digital solutions!
        </p>
        <div className={styles.name}>
          <div>Name</div>
          <input value={form.name} name='name' onChange={handleChange}/>
        </div>
        <div className={styles.lName}>
          <div>Last Name</div>
          <input value={form.lname} name='lname' onChange={handleChange} />
        </div>
        <div className={styles.email}>
          <div>Email</div>
          <input value={form.email} name='email' onChange={handleChange}/>
        </div>
      </div>
      <p>{success ? <p style={{color:"green",textAlign:"center",fontWeight:"bold"}}>Success! Message Sent</p>:""}</p>
      <p>{notValid ? <p style={{color:"red",textAlign:"center",fontWeight:"bold"}}>PLease Fill all fields</p>:""}</p>
      <div className={styles.btnContainer}>
      <button onClick={handleSubmit} className={styles.sbmBtn}>
            Send
      </button>
      </div>
     
    </>
  );
};
