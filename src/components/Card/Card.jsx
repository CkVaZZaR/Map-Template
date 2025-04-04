import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import "./Card.css";

export default function Card({ profile, onSwipe, active }) {
  const [direction, setDirection] = useState("");

  function handleSwipe(direction) {
    onSwipe(direction);
    setDirection(direction);
    setTimeout(500);
    setDirection("");
    console.log("swiped", direction);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true,
    preventDefaultScroll: true,
  });

  return (
    <div
      {...handlers}
      className={`card ${
        active
          ? "active" +
            (direction === "right" ? " right-swipe" : "") +
            (direction === "left" ? " left-swipe" : "")
          : ""
      }`}
    >
      <div
        className='card-image'
        // style={{ backgroundImage: `url(${profile.photo})` }}
        style={{
          backgroundImage: `url(${"https://thispersondoesnotexist.com/"})`,
        }}
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
