import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationList from "./Location/LocationList";
import OwnerList from "./Owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./Employee/EmployeeList";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./Employee/EmployeeDetails";
import LocationDetail from "./Location/LocationDetails";
import OwnerDetail from "./Owner/OwnerDetails";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route 
        path="/locations/:locationId(\d+)" 
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <LocationDetail 
            locationId={parseInt(props.match.params.locationId)}
            {...props}
            />
          )
        }} 
      />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route 
        path="/employees/:employeeId(\d+)" 
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}/>
        }} 
      />
      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      <Route 
        path="/owners/:ownerId(\d+)" 
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}/>
        }} 
      />
      {/* Make sure you add the `exact` attribute here */}
      <Route 
        exact 
        path="/animals" 
        render={(props) => {
          return <AnimalList />
        }} 
        />
      <Route 
        path="/animals/:animalId(\d+)" 
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail 
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          )
        }} 
      />
      {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
      */}
    </React.Fragment>
  );
};

export default ApplicationViews;