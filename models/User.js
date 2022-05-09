const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User Model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS GO HERE
        // define an id column
        id: {
            // use the special Sequelize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            // NOT NULL
            allowNull: false,
            // PRIMARY KEY AUTO_INCREMENT
            primaryKey: true,
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicates
            unique: true,
            // run through validator before creating table
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be atleast 4 characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration)

        // pass in our imported sequelize connection
        sequelize,
        // dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // dont pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // model name stays lowercase in database
        modelName: 'user'
    }
);

module.exports = User;
