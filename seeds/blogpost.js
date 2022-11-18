const { Post } = require('../models');

const postdata = [
{
    title: 'Why MVC is so important',
    content: '',
    _id: 2,
    user_id: 4,
  },
  {
    title: 'Authentication vs. Authorization',
    content: '',
    _id: 2,
    user_id: 4,
  },
  {
    title: 'Object Relational Mapping',
    content: '',
    _id: 2,
    user_id: 4,
  };

const seedPost = async () => await Post.bulkCreate(postdata);

module.exports = seedPost;