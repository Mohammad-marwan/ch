import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handeleChange = (e)=>{
      const{name,value} = e.target
    setFormInput({...formInputs,[name]:value,})
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(`submittedData?<div> name is ${formInputs.name} email is ${formInputs.email} 
          age is ${formInputs.age}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>User Name </label>
        <input type="text" value={formInputs.name} name='name' onChange={handeleChange} />
  
        <label>Email </label>
        <input type="text" value={formInputs.email} name='email' onChange={handeleChange} />
        <label>Age </label>
        <input type="text" value={formInputs.age} name ='age' onChange={handeleChange} />
  
        <hr />
        <button type='submit'>Submit</button>

        {submittedData?<div> name is {formInputs.name} email is {formInputs.email} 
          age is {formInputs.age}
        </div>:null}
        
      </form>
    )
  }