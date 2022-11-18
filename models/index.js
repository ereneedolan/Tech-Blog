const User = require('./User');
const Blogposts = require('./blogposts');
const Comment = require('./comment');

User.hasMany(Blogposts, {
  foreignKey: 'user_id',
});

Blogposts.belongsTo(User, {
  foreignKey: 'user_id',
});

Blogposts.hasMany(Comment, {
  foreignKey: 'blogposts_id',
});

Comment.belongsTo(Blogposts, {
  foreignKey: 'blogposts_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Blogposts, Comment};
