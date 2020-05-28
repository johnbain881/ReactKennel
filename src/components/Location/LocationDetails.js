import React, { useState, useEffect } from 'react';
import './LocationDetails.css'
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", title: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          title: location.breed
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Title: {location.title}</p>
      </div>
    </div>
  );
}

export default LocationDetail;