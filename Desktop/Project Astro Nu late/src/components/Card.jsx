import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Card.css'; // Import the CSS file


export default function Card({ imageSrc, title, description, cuisine,time,time_logo,difficulty}){
    const renderStars = (difficulty) => {
        const fullStars = Math.floor(difficulty); // Full stars
        const hasHalfStar = difficulty % 1 !== 0; // Check for half star
    
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
        }
    
        if (hasHalfStar) {
          stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
        }
    
        const emptyStars = 5 - Math.ceil(difficulty);
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} style={{ opacity: 0.5 }} />);
        }
    
        return stars;
      };
    return(
        <a href="#" alt=""> 
        <div className="card">
        <img  className= 'card-image' src={imageSrc.src} alt="" />
        <h2>{title}</h2>
         <p>{description}</p>
          <p className="cuisine">{cuisine}</p>
           <p className="time-take">{time}</p>
           <img className="time-logo" src={time_logo.src} alt="" />
           <div className="difficulty">{renderStars(difficulty)}</div>

        </div>
    </a>
    )
}