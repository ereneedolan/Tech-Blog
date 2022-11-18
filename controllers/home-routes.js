const router = require('express').Router();
const { User, Blogposts, Comment } = require('../models');

// // GET all blogposts
router.get('/', async (req, res) => {
  try {
    const dbtechBlogData = await Blogposts.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });

    const blogposts = dbtechBlogData.map((blogposts) =>
      blogposts.get({ plain: true })
    );

   //Send over the 'SignedIn' session variable to the 'homepage' template
    res.render('homepage', {
      blogposts,
      signedIn: req.session.signedIn
    });
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one blogpost
router.get('/blogpost/:id', async (req, res) => {
  try {
    const dbtechBlogData = await Blogposts.findByPk(req.params.id, {
      include: [
        {
              model: User,
            },
            {
              model: Comment,
            },
      ],
    });

    const blogpost = dbtechBlogData.get({ plain: true });

    //Send over the 'signedIn' session variable to the 'blogpost' template
    res.render('blogpost', { blogpost, signedIn: req.session.signedIn }
    
    );
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Signin route
router.get('/signin', (req, res) => {
  // If the user is already signed in, redirect to the homepage
  if (req.session.signedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'sign in' template
  res.render('signin');
});

module.exports = router;
