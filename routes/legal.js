var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/imprint', function(req, res, next) {
    res.redirect('https://www.content-creator.org/legal/imprint')
});

/* GET home page. */
router.get('/privacy', function(req, res, next) {
    res.redirect('https://www.content-creator.org/legal/privacy')
});

module.exports = router;
