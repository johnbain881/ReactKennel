import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationList from "./Location/LocationList";
import OwnerList from "./Owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./Employee/EmployeeList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./Location/LocationDetails";
import OwnerDetail from "./Owner/OwnerDetails";
import AnimalForm from './animal/AnimalForm'
import LocationForm from './Location/LocationForm'
import OwnerForm from './Owner/OwnerForm'
import EmployeeForm from './Employee/EmployeeForm'
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeWithAnimals from './Employee/EmployeeWithAnimals'


const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;


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
        path="/locations" render={props => {
            return <LocationList {...props} />
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
        path="/locations/new" 
        render={(props) => {
          return <LocationForm {...props} />
        }} 
      />
      <Route 
        exact 
        path="/employees" render={props => {
          if (hasUser) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} 
      />
      <Route 
        path="/employees/:employeeId(\d+)" 
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeWithAnimals {...props} />
        }} 
      />
      <Route 
        path="/employees/new" 
        render={(props) => {
          return <EmployeeForm {...props}  />
        }} 
      />
      <Route 
        exact 
        path="/owners" render={props => {
          if (hasUser) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} 
      />
      <Route 
        path="/owners/:ownerId(\d+)" 
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}/>
        }} 
      />
      <Route 
        path="/owners/new" 
        render={(props) => {
          return <OwnerForm {...props} />
        }} 
      />
      {/* Make sure you add the `exact` attribute here */}
      <Route 
        exact 
        path="/animals" render={props => {
          if (hasUser) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} 
      />
      <Route 
        exact
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
      <Route path="/animals/:animalId(\d+)/edit" 
        render={props => {
          if (hasUser) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} 
      />
      <Route 
        path="/animals/new" 
        render={(props) => {
          return <AnimalForm {...props} />
        }} 
      />
      <Route path="/login" render={props => {
          return <Login setUser={setUser} {...props} />
        }} 
      />
    </React.Fragment>
  );
};

export default ApplicationViews;