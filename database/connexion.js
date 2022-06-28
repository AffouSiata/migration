const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('projet_migration', 'Affou', '12345', {
    dialect:  'mysql' ,
    host: '192.168.64.2'
});
module.exports =sequelize;

// const fs = require('fs');

// const base = {
//     development: {
//       username: 'Affou',
//       password: '12345',
//       database: 'projet_migration',
//       host: '192.168.64.2',
//       dialect: 'mysql'
//     }
//   }
// module.exports =base;