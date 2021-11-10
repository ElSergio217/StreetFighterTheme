import React, { useState } from 'react';





const Contact= () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  
  const [sent, setSent] = useState(false);


  const sendMail = () => {

    if(name!=='' && email!=='' && subject!=='' && msg !==''){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: name, 
          email: email, 
          subject: subject,
          msg: msg, 
        })
      };
      fetch('/sendmessage', requestOptions)
        .then(response => response.json())
        .then(data => setSent(true) );
    }else{
      alert("Oh no! Missing required fields :(")
    }
  }

  return(
    <section className="content-section black-back" id="contact">
        <div className="container">

          <h1 className="grey-with-red text-center">Contact</h1>
        
        {sent ? 
          <h2 className="text-white text-center"> Message was sent! </h2>
        :
          <>
            <h2 className="text-white text-center"> Let's make something awesome together </h2>

              <div className="form">
                  <div className="form-group">
                    <label for="Name" className="text-white">Name</label>
                    <input type="text" name="name" id="Name" placeholder="Your full name" className="form-control form-control-lg" onChange={(e)=>{setName(e.target.value)}}/>
                  </div>

                  <div className="form-group">
                    <label for="Email" className="text-white">Email</label>
                    <input type="email" name="email" id="Email" placeholder="e.g. hello@email.com"  className="form-control form-control-lg" onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>

                  <div className="form-group">
                    <label for="Select" className="text-white">Subject</label>
                    <select type="select" name="select" id="Select" className="form-control form-control-lg"  onChange={(e)=>{setSubject(e.target.value)}}>
                      <option value="" disabled selected> - Select a subject line - </option>
                      <option>I need a Website</option>
                      <option>I need a Mobile app</option>
                      <option>I need an Immersive Experience</option>
                      <option>I need something else</option>
                    </select> 
                  </div> 

                  <div className="form">
                    <label for="Message" className="text-white">Message</label>
                    <textarea type="textarea" name="message" id="Message"  className="form-control form-control-lg"  onChange={(e)=>{setMsg(e.target.value)}}/>
                  </div> 

              </div>
              <br/>
              
              <button onClick={() => sendMail()} className="btn-lg btn btn-primary mx-auto float-right" >Send</button>
            </>
          }
        </div>
    </section>
  );
};

export default Contact


