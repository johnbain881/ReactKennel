import React from "react";
import "./LocationCard.css"
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">{props.location.name}</span>
        </h3>
        <p>Location: {props.location.name}</p>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;