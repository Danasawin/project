import './big-card.css'; // Import the CSS file

export default function big_card({ img, title }) {
  return (
    <a href="">
      <div className="big-card">
        <img className="img-big-card" src={img.src} alt="" />
        <p className="text-big-card">{title}</p>
      </div>
    </a>
  );
}
