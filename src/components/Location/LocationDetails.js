import React, { useState, useEffect } from 'react';
import './LocationDetails.css'
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", title: "" });
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          title: location.breed
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  if (location.name !== undefined) {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
          <p>Title: {location.title}</p>
          <button disabled={isLoading} onClick={handleDelete}>Close</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-content">
          <h1>We're Sorry! That Location is no longer in use.</h1>
        </div>
      </div>
    )
  }
}

export default LocationDetail;