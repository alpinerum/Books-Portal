const Sequelize = require('sequelize');

const sequelize = new Sequelize('books_portal', 'anonymous', '123456', {dialect: 'mysql'});

module.exports = sequelize;