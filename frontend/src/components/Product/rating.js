import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon icon={faStar} />;

const halfStar = <FontAwesomeIcon icon={faStarHalfAlt} />;

function FullStars(props) {
  const rating = props.rating;
  const starsElement = [];
  for (let i = 1; i <= rating; i++) {
    starsElement.push("star");
  }
  const finalStarsDiv = starsElement.map((element, index) => (
    <span key={index}>{star}</span>
  ));
  console.log("finalstars", finalStarsDiv);
  return finalStarsDiv;
}

export default function rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <FullStars rating={rating} />
      {rating % 1 >= 0.5 ? <span>{halfStar}</span> : null}
      <span>{numReviews} reviews</span>
    </div>
  );
}
