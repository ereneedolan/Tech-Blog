const { Post } = require('../models');

const postdata = [
{
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design and the Controller layer for application login',
    _id: 2,
    user_id: 4,
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    _id: 2,
    user_id: 4,
  },
  {
    title: 'Object Relational Mapping',
    content: 'I have really loven learning about ORMs. It has really simplified the way I created queries in SQL!', 
      _id: 2,
    user_id: 4,
  };

const seedPost = async () => await Post.bulkCreate(postdata);

module.exports = seedPost;