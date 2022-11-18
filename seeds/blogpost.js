const { Post } = require('../models');

const postdata = [
{
    title: '',
    content: '',
    _id: 2,
    user_id: 4,
  },
  {
    title: '',
    content: '',
    _id: 2,
    user_id: 4,
  },
  {
    title: '',
    content: '',
    _id: 2,
    user_id: 4,
  }

  const seedPost = async () => await Post.bulkCreate(postdata);

module.exports = seedPost;