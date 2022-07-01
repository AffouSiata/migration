'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true,
          validate: {
              len:{
                    args: 3,
                    msg: "Le nom doit comporter au moins 3 caractères"
                  }
              }
      },
      lastName:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true,
          validate: {
              len:{
                    args: 4,
                    msg: "Le prenom doit comporter au moins 3 caractères"
                  }
              }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [6, 128],
                msg: "L'adresse e-mail doit comporter entre 6 et 128 caractères"
            },
            isEmail: {
                msg: "L'adresse e-mail doit être valide"
            }
        }
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    Model.sync().success(function() {
      Model.build({ from: "Users" }).validate().success(function(errors) {
        console.log(errors)
      })
    })
    
  },
 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};