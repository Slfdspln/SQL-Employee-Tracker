// Seeds role table with json data

const sequelize = require("../connection");
const Role = require("../Models/role");

const rolesSeedData = require("./rolesSeedData.json");

const seedRoleData = async () => {
  await sequelize.sync({ force: true });

  const roles = await Role.bulkCreate(rolesSeedData);

  process.exit(0);
};

seedRoleData();