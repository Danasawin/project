import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const RenderStars = ({ difficulty }) => {
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

export default RenderStars;