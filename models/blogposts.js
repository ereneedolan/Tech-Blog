const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogposts extends Model {}


  Blogposts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blogpost_date: {
        type: DataTypes.DATE,
        default: Date.NOW,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
     
    },
  )
module.exports = Blogposts;