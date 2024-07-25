import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/photos/msg-icon-ClKDHhj8.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4bb1fd5-232b-435b-9799-db850d17d0fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><MdOutlineForwardToInbox className='icons'/>Contact@GreatStack.dev</li>
          <li><FaPhoneVolume className='icons'/>+1 123-456-7890</li>
          <li><FaLocationDot className='icons'/>77 Massachusetts Ave, Cambridge
          MA 02139, United States</li>
        </ul>
      </div >
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
    <label >Phone Number</label>
    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
    <label >Write your messages here</label>
    <textarea name="message" id="" rows="6"
    placeholder='Enter your message' required></textarea>
    <button type="submit" className='btn dark-btn'>Submit now<FaLongArrowAltRight /> </button>
    <span>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact