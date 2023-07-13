import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function HomeCard({ id, title, eventStartTime, eventType, eventThumbnail }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateImage = () => {
      setBackgroundImage(eventThumbnail);
    };

    updateImage();
  }, [eventThumbnail]);

  return (
    <Link className="card-container" to={"/event/"+id}>
      <div className="card-status">
        <span> {eventType} </span>
      </div>

      <div
        className="image-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div><p>{eventStartTime}</p></div>
      <div><h2>{title}</h2></div>
    </Link>
  );
}
