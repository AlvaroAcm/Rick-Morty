import React, { useEffect } from "react";
import "./card.css";
import useFetchOrigin from "../../services/customHooks/useFetchOrigin";
import { statusConditional } from "../../services/commonFunctions/statusConditional";

const Card = ({
  image,
  name,
  location,
  status,
  episodes,
  createdAt,
  gender,
  species,
  origin,
  url,
}) => {

  const {episode} = useFetchOrigin(url)
  console.log(episode);
  const statusStyles = {
    background: statusConditional(status),
    boxShadow: `0 0 10px 0 ${statusConditional(status)}`
  }
  return (
    <div className="card__container">
      <div className="image__container">
        <img src={image} alt="" />
      </div>
      <div className="info__container">
        <div>
          <h3>{name}</h3>
          <h4>Origin: {origin}</h4>
          <span>
            <div className="icon" style={statusStyles}></div>
            {status} - {species} - {gender}
          </span>
        </div>
        <div>
          <h6>Last known location:</h6>
          <h4>{location}</h4>
        </div>
        <div>
          <h6>First seen in:</h6>
          <h4>{episode?.name}</h4>
        </div>
        <p><b>Created: </b>{createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
