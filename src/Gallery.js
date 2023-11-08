import { useState } from "react";
import sculptureList from "./data.js";
import "./gallery.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    if (index === 0) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="gallery">
      <div className="gallery__nextprev-btns">
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
        <button type="button" onClick={handlePrevClick}>
          Previous
        </button>
      </div>

      <h1>
        {sculpture.name}
        by {sculpture.artist}
      </h1>
      <h2>
        ({index + 1} of {sculptureList.length})
      </h2>

      <img className="gallery__image" src={sculpture.url} alt={sculpture.alt} />

      <div className="gallery__details-center">
        <button
          type="button"
          onClick={handleShowMore}
          className="gallery__details"
        >
          {showMore ? "Hide" : "Show"} details
        </button>
      </div>
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}
