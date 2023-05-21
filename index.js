// Importing Department, Role, & Employee models from the models folder -> blueprint of our tables
const { Department, Role, Employee } = require("./Models");
const inquirer = require("inquirer");

// Importing sequelize which is our telephone to the database it allows javascript to talk with mysql
const sequelize = require("./connection");

// Importing inquirer (for prompting user)
// import { Department, Role, Employee } from "./Models";
// Syncs the database with created models
sequelize.sync({ force: false }).then(() => {
  options();
});

// Function written to prompt the user with different options to navigate the database
function options() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          //   `(Move up and down to reveal more choices)`,
        ],
        name: "employeeTracker",
      },
    ])
    // Takes in user choice, checks with equality, and then fires off corresponding function
    .then((answer) => {
      if (answer.employeeTracker === "View All Departments") {
        viewAllDepartments();
      } else if (answer.employeeTracker === "View All Roles") {
        viewAllRoles();
      } else if (answer.employeeTracker === "View All Employees") {
        viewAllEmployees();
      } else if (answer.employeeTracker === "Add Department") {
        addDepartment();
      } else if (answer.employeeTracker === "Add Role") {
        addRole();
      } else if (answer.employeeTracker === "Add Employee") {
        addEmployee();
      } else {
        updateEmployeeRole();
      }
    });
}

// -------------- VIEW -----------------

// View all departments
const viewAllDepartments = () => {
  var departments = Department.findAll({ raw: true }).then((data) => {
    console.table(data);
    // Fires off prompts after table is displayed
    options();
  });
};

// View all roles
const viewAllRoles = () => {
  var roles = Role.findAll({
    raw: true,
    // Joining Department table and Role table
    include: [{ model: Department }],
  }).then((data) => {
    console.table(
      // Loops through data and returns new object, used to format tables
      data.map((role) => {
        return {
          id: role.id,
          title: role.title,
          salary: role.salary,
          department: role["Department.name"],
        };
      })
    );
    // Fires off prompts after table is displayed
    options();
  });
};

// View all employees
const viewAllEmployees = () => {
  var employees = Employee.findAll({
    raw: true,
    // Joining Role table, and Department table with Employee table
    include: [{ model: Role, include: [{ model: Department }] }],
  }).then((data) => {
    const employeeLookup = {};
    // For loop used to grab employee names to be inserted below into managers column in newly created table
    for (var i = 0; i < data.length; i++) {
      const employee = data[i];
      employeeLookup[employee.id] =
        employee.first_name + " " + employee.last_name;
    }
    console.table(
      // Loops through data and returns new object, used to format tables
      data.map((employee) => {
        return {
          id: employee.id,
          first_name: employee.first_name,
          last_name: employee.last_name,
          title: employee["Role.title"],
          department: employee["Role.Department.name"],
          salary: employee["Role.salary"],
          manager: employeeLookup[employee.manager_id],
        };
      })
    );
    // Fires off prompts after table is displayed
    options();
  });
};

// -------------- ADD -----------------

// Add department
const addDepartment = () => {
  // Prompts user for name of new department
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would you like to name the department?",
        name: "addDepartment",
      },
    ])
    // Takes in user input and adds answer to database
    .then((answer) => {
      Department.create({ name: answer.addDepartment }).then((data) => {
        // Fires off prompts after updating database
        options();
      });
    });
};

// Add role
const addRole = async () => {
  // Same as -> SELECT id AS VALUE, name AS name FROM Department;
  let departments = await Department.findAll({
    attributes: [
      ["id", "value"],
      ["name", "name"],
    ],
  });
  // Restructures raw data
  departments = departments.map((department) =>
    department.get({ plain: true })
  );

  // Prompts user for new role name, salary, and corresponding department
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "title",
      },
      {
        type: "input",
        message: "What would you like the salary to be?",
        name: "salary",
      },
      {
        type: "list",
        message: "What department would you like to add this new role to?",
        name: "department_id",
        choices: departments,
      },
    ])
    // Takes in user inputs and adds answers to database
    .then((answer) => {
      Role.create(answer).then((data) => {
        // Fires off prompts after updating database
        options();
      });
    });
};

// Add employee
const addEmployee = async () => {
  let roles = await Role.findAll({
    attributes: [
      ["id", "value"],
      ["title", "name"],
    ],
  });
  // Restructures raw data
  roles = roles.map((role) => role.get({ plain: true }));

  let managers = await Employee.findAll({
    attributes: [
      ["id", "value"],
      ["first_name", "name"],
      ["last_name", "lastName"],
    ],
  });
  // Restructures raw data
  managers = managers.map((manager) => {
    manager.get({ plain: true });
    const managerInfo = manager.get();
    return {
      name: `${managerInfo.name} ${managerInfo.lastName}`,
      value: managerInfo.value,
    };
  });
  managers.push({ type: "Null Manager", value: null });

  // Prompts user for first name, last name, role, and corresponding manager
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the new employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the new employee?",
        name: "last_name",
      },
      {
        type: "list",
        message: "What is the role of the new employee?",
        name: "role_id",
        choices: roles,
      },
      {
        type: "list",
        message: "What manager would you like to assign to the new employee?",
        name: "manager_id",
        choices: managers,
      },
    ])
    // Takes in user inputs and adds answers to database
    .then((answer) => {
      Employee.create(answer).then((data) => {
        // Fires off prompts after updating database
        options();
      });
    });
};

// -------------- UPDATE -----------------

// Update employee role
const updateEmployeeRole = async () => {
  let employees = await Employee.findAll({
    attributes: [
      ["id", "value"],
      ["first_name", "name"],
      ["last_name", "lastName"],
    ],
  });
  // Restructures raw data
  employees = employees.map((employee) => {
    employee.get({ plain: true });
    const employeeInfo = employee.get();
    return {
      name: `${employeeInfo.name} ${employeeInfo.lastName}`,
      value: employeeInfo.value,
    };
  });

  let roles = await Role.findAll({
    attributes: [
      ["id", "value"],
      ["title", "name"],
    ],
  });
  // Restructures raw data
  roles = roles.map((role) => role.get({ plain: true }));

  // Prompts user to select employee whose role will be updated, and new role of said employee
  inquirer
    .prompt([
      {
        type: "list",
        message: "Who is the employee whose role you would like to update?",
        name: "id",
        choices: employees,
      },
      {
        type: "list",
        message:
          "What is the name of the updated role would you like to assign to this employee?",
        name: "role_id",
        choices: roles,
      },
    ])
    // Takes in user inputs and adds answers to database
    .then((answer) => {
      // Gives point of reference within database to where data should be updated
      Employee.update(answer, {
        where: {
          id: answer.id,
        },
      }).then((data) => {
        // Fires off prompts after updating database
        options();
      });
    });
};