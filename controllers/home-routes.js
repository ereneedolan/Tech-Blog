const router = require('express').Router();
const { Gallery, Painting } = require('../models');

// // GET all galleries for homepage - example from class
// router.get('/', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

    // TODO: Send over the 'SignedIn' session variable to the 'homepage' template
    res.render('homepage', {
      
      loggedIn: req.session.loggedIn
    });
   catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


// // GET one gallery example from class 
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
            
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });

    // TODO: Send over the 'SignedIn' session variable to the 'gallery' template
    res.render('gallery', { gallery, SignedIn: req.session.SignedIn });
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

//example from class
// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });
//     // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('painting', { painting, loggedIn: req.session.loggedIn});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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
