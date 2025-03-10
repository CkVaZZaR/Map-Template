import { useSwipeable } from "react-swipeable";
import "./Card.css";

export default function Card({ profile, onSwipe, active }) {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe("left"),
    onSwipedRight: () => onSwipe("right"),
    trackMouse: true,
    preventDefaultScroll: true,
  });

  return (
    <div {...handlers} className={`card ${active ? "active" : ""}`}>
      <div
        className='card-image'
        style={{ backgroundImage: `url(${profile.photo})` }}
      />
      <div className='card-info'>
        <h2>
          {profile.name}, {profile.age}
        </h2>
        <p>{profile.bio}</p>
      </div>
    </div>
  );
}
