import React from "react";
import "./EmployeeCard.css"
import { Link } from "react-router-dom";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">{props.employee.name}</span>
        </h3>
        <p>Title: {props.employee.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;