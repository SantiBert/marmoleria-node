const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Un titulo de mierda' });
});

router.get('/blog', (req, res) => {
    res.render('blog.html', { title: 'Un contacto de mierda' });
});

module.exports = router;