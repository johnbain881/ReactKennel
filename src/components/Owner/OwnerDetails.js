import React, { useState, useEffect } from 'react';
import './OwnerDetails.css'
import OwnerManager from '../../modules/OwnerManager';

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", title: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          title: owner.title
        });
      });
  }, [props.ownerId]);

  if (owner.name !== undefined) {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
          <p>Title: {owner.title}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-content">
          <h1>We're Sorry! That owner is no longer at this kennel</h1>
        </div>
      </div>
    )
  }
}

export default OwnerDetail;