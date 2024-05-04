import Food_logo from '../assets/mango.jpg';

import '../components/Nav.css';
import { BiLogOut } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Nav_login = () => {
  const handleExit = async (event) => {
    event.preventDefault();

    try {

      // Store tokens securely in localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken'); 
      window.location.href = '/';
    } catch (error) {
      console.error('Error handling exit event:', error);
    }
  };
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={Food_logo.src} style={{ width: '100px', height: 'auto' }} alt="Logo" />
        </a>
        <ul>
          <li>
            <a href="/food-recipe">RECIPES</a>
            <ul className="dropdown">
              <li><a href="/meat-recipe">Meat</a></li>
              <li><a href="/pork-recipe">Pork</a></li>
              <li><a href="/chicken-recipe">Chicken</a></li>
              <li><a href="/seafood-recipe">Seafood</a></li>

              <li><a href="/meatless-recipe">Meatless</a></li>



              <li><a href="/dessert-recipe">Dessert</a></li>
              <li><a href="/drink-recipe">Drinks</a></li>
            </ul>
          </li>
          <li>
            <a href="/cuisine">CUISINES</a>
            <ul className="dropdown">
              <li><a href="/thai-cuisines">Thai</a></li>
              <li><a href="/japanese-cuisines">Japanese</a></li>
              <li><a href="/chinese-cuisine">Chinese</a></li>
              <li><a href="indian-cuisines">Indian</a></li>
              <li><a href="italian-cuisine">Italian</a></li>
              <li><a href="german-cuisine">German</a></li>

              <li><a href="french-cuisine">French</a></li>
              <li><a href="korean-cuisine">Korean</a></li>

              <li><a href="/cuisine">View All</a></li>


            </ul>
          </li>
          <li className='about'><a href="/about">ABOUT US</a></li>
          <li className='contact'><a href="/contact">CONTACT</a></li>
     
        </ul>
        <a href="/favourite"><FaRegHeart style={{ width: '30px', height: 'auto', color: 'white' }}/></a>
        <a onClick={handleExit} className='login-link' href="/"><BiLogOut style={{ width: '30px', height: 'auto', color: 'white' }} /></a>
      
      </nav>  
   
    </>
    
  );
}
export default Nav_login;
