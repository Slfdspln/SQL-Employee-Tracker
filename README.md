# <h1 align="center">SQL-Employee-Tracker</h1>
Week-12 Challenge (SQL)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

*  [Description](#Description)
          <a name="Screenshots"></a>

*  [Screenshots](#Screenshots)
          <a name="Screenshots"></a>
   
*  [Technologies-Used](#Technologies-Used)
          <a name="Technologies Used"></a> 
          
*  [Installation](#Installation)
          <a name="Installation"></a> 
          
*  [Usage-Information](#Usage-Information)
          <a name="Usage-Information"></a> 
          
*  [License](#License)
          <a name="License"></a> 
         
*  [Questions](#Questions)
          <a name="Questions"></a> 
          

##  Description 
This application enables business owners to efficiently manage departments, roles, and employees within their company. The database is built with MySQL and seamlessly interacts with JavaScript through the sequelize dependency. By utilizing this approach, the need for complex and convoluted query statements is eliminated, despite the initial effort required for file structuring and table connections.

While developing this application, I acquired and enhanced skills in database seeding using MySQL and sequelize. I became proficient in joining tables and manipulating data using the .map() function to achieve desired displays. Additionally, I deepened my understanding of the inquirer dependency and accessing specific object data using dot notation.

In terms of future development, I envision incorporating unit testing to ensure robust functionality. Planned enhancements include the ability to update employee managers, view employees by manager or department, delete departments, roles, and employees from the database, and calculate the total utilized budget of a department, representing the combined salaries of its employees. Furthermore, I find the idea of implementing terminal animations to enhance the application's visual polish intriguing.

 
##  Live Screen Recording of Application Functionality 

https://drive.google.com/file/d/1r4teAm275Ykf68gbLjhnZ2Q1_eX81UGJ/view

## Screenshots 

<img width="1470" alt="Screenshot 2023-05-20 at 10 16 15 PM" src="https://github.com/Slfdspln/SQL-Employee-Tracker/assets/121422214/42524b79-d0f6-4b30-a54f-733ca6310c7a">

<img width="1470" alt="Screenshot 2023-05-20 at 10 17 12 PM" src="https://github.com/Slfdspln/SQL-Employee-Tracker/assets/121422214/c314866a-bd08-48e0-a42b-90ee905778c3">

<img width="1470" alt="Screenshot 2023-05-20 at 10 17 49 PM" src="https://github.com/Slfdspln/SQL-Employee-Tracker/assets/121422214/81611ab6-ca19-406e-9e06-549a2248d1b7">

<img width="1470" alt="Screenshot 2023-05-20 at 10 18 08 PM" src="https://github.com/Slfdspln/SQL-Employee-Tracker/assets/121422214/6e66c681-8d01-4919-bf10-c9f38e82f6fc">

<img width="1470" alt="Screenshot 2023-05-20 at 10 18 30 PM" src="https://github.com/Slfdspln/SQL-Employee-Tracker/assets/121422214/4c4487d4-07c2-494a-80c6-c60a2f045488">



## Technologies Used

This application leverages Node.js (v16.19.1), JavaScript, and SQL to operate. It makes use of several dependencies from the node package manager (npm), including sequelize (v6.31.0), mysql2 (v3.2.4), dotenv (v16.0.3), inquirer (v8.2.4), and chalk (v5.2.0).

## Installation

1. Clone the repository by running the following command: git clone 

2. Open the cloned repository in Visual Studio Code. If you do not have Visual Studio Code installed, please install it.

3. Using the terminal, install Node.js version 16. If you have Homebrew installed, you can use the following command: brew install node@16. However, the specific installation command may vary depending on your system, so please refer to the documentation for the correct instructions.

4. Once Node.js version 16 is installed, initialize and create a package.json file where project files will be stored by running the command npm init -y in the terminal.

5 .Install the dependencies associated with this application using the terminal and the npm i command. Developers may need to install dependencies directly from the command line.

* To install Sequelize, run the command npm i sequelize.
* To install mysql2, run the command npm i mysql2.
* To install dotenv, run the command npm i dotenv.
* To install Inquirer version 8.2.4, run the command npm i inquirer@8.2.4.
* To install Chalk, run the command npm i chalk.

6 .Once all the dependencies are installed, you need to create the database. Navigate to the "db" directory containing the "schema.sql" file using the terminal. Then, open a MySQL shell and run the command source schema.sql to create the database.

7 .After creating the database, you need to seed the database, which will also create the table structure within the database. From the root directory, navigate to the "seeds" folder and run the associated files. This step needs to be done from the root directory because the ".env" file is located there. The commands will be as follows:

* To seed the departments: node ./seeds/departments.
* To seed the roles: node ./seeds/roles.
* To seed the employees: node ./seeds/employees.

8. Once the database has been seeded, you can run the command npm start from the root directory to start the application.

## Usage Information

The utilization of this application is highly intuitive. Upon initiating the application (please refer to the installation section for comprehensive instructions on how to install and activate the application), the user will be presented with a range of options. These choices empower the user to perform tasks such as accessing and observing Department, Role, or Employee tables, adding new entries for Departments, Roles, or Employees into the database, or updating the Role of a specific Employee.

In the event that the user opts to add or update information in the database, their chosen modifications will be immediately visible when they subsequently view the corresponding table that has been updated.

## License

NOTICE: This application is covered under the MIT License

## Questions

Need more information? You can contact me through my LinkedIn or Email. Links provided below.

Click for LinkedIn -> [LinkedIn](https://www.linkedin.com/in/cristal-rivera-662b58248/)

Click to Email -> [Email](mailto:inaliaashanti@gmail.com?subject=[Email]%20Source%20Han%20Sans)

