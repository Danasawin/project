import '../components/circle-card.css';

export default function CircleCard({ img, title, href }) {
  return (
    <div className="circle-card">
      <a  href={href}><img className="img-circle-card" src={img.src} alt="" /></a>
      <a className='achor-circle-card' href="#"><p className="text-circle-card">{title}</p></a>
    </div>
  );
}
