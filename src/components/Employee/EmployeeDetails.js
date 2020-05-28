import React, { useState, useEffect } from 'react';
import './EmployeeDetails.css'
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "", title: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          title: employee.title
        });
      });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
        <p>Title: {employee.title}</p>
      </div>
    </div>
  );
}

export default EmployeeDetail;