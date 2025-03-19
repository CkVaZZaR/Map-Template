import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

export default function CardContainer() {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    fetch("/profiles.json")
      .then((response) => response.json())
      .then((data) => setProfiles(data.profiles))
      .catch((error) => console.error("Error loading profiles:", error));
  }, []);

  const handleSwipe = (direction) => {
    setAnimation(direction === "right" ? "slide-right" : "slide-left");
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setAnimation("");
    }, 500);
  };

  if (currentIndex >= profiles.length) {
    return (
      <div className='container1'>
        <h1>Поиск анкет...</h1>
      </div>
    );
  }

  return (
    <div className={`cards-container ${animation}`}>
      {profiles.slice(currentIndex, currentIndex + 2).map((profile, index) => (
        <Card
          key={profile.id}
          profile={profile}
          active={index === 0}
          onSwipe={handleSwipe}
        />
      ))}
    </div>
  );
}
