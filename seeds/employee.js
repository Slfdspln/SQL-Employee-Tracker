// Seeds employee table with json data

const sequelize = require("../connection");
const Employee = require("../Models/employee");

const employeesSeedData = require("./employeesSeedData.json");

const seedEmployeeData = async () => {
  await sequelize.sync({ force: true });

  const employees = await Employee.bulkCreate(employeesSeedData);

  process.exit(0);
};

seedEmployeeData();