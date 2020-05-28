import React from "react";
import "./OwnerCard.css"
import { Link } from "react-router-dom";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">{props.owner.name}</span>
        </h3>
        <p>Title: {props.owner.title}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
        <Link to={`/owners/${props.owner.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerCard;