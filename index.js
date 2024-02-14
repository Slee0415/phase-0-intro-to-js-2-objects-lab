// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }
  
  const employee = {
    name: "John Doe",
    age: 30,
  };
  
  const key = "streetAddress";
  const value = "11 Broadway";
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, key, value);
  console.log(updatedEmployee);

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
  
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }