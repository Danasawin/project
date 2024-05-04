import './contact.css'; // Import the CSS file
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
export default function contact_card({ img, name }) {
  return (
  
      <div className="contact_card">
        <img className="contact_img" src={img.src} alt="" />
        <p className="contact_name">{name}</p>
        <a href=""><FaFacebookSquare style={{ width: '50px', height: 'auto', color: 'black' }} /></a>
        <a href=""><FaGithub style={{ width: '50px', height: 'auto', color: 'black' }} /></a>
      </div>
    
  );
}
