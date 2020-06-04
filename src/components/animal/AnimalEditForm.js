import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" , employeeId: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([])


  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: animal.employeeId
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
      }).then(animal => 
        EmployeeManager.getAll()
          .then(employee => {
            setEmployees(employee)
            setIsLoading(false)
          })
      )
  }, []);


  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select 
              onChange={handleFieldChange}
              id="employeeId"
            >
              {employees.map(employee => 
                <option key={employee.id} value={employee.id} selected={employee.id === animal.employeeId ? true : ""}>{employee.name}</option>
              )}
            </select>
            <label htmlFor="emplyeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm