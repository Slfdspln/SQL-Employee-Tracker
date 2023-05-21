// Importing Department, Role, and Employee models
const Department = require("./department.js")
const Role = require("./role.js");
const Employee = require("./employee.js");

// This file creates relationships between specific tables so that they can be joined in the index.js file in the root directory

// Role belongs to Departments
Role.belongsTo(Department, {
  foreignKey: "department_id",
  onDelete: "CASCADE",
});

// Department has many Role(s)
Department.hasMany(Role, {
  foreignKey: "department_id",
  onDelete: "CASCADE",
});

// Employee belongs to Role
Employee.belongsTo(Role, {
  foreignKey: "role_id",
  onDelete: "CASCADE",
});

// Role has one Employee
Role.hasOne(Employee, {
  foreignKey: "role_id",
  onDelete: "CASCADE",
});

// Employee has one Employee (aka manager)
Employee.hasOne(Employee, {
  foreignKey: "manager_id",
  onDelete: "CASCADE",
});

// Exporting tables with newly established relationships to each other
module.exports = { Department, Role, Employee }