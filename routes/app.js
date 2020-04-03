const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur');
var path = require('path')
var app = express()
app.set('view engine', 'jade')
app.use(express.static("."));

router.get('/', (req, res) => {
    res.sendFile(
      path.join(__dirname + '/index.html'));
});

router.get('/search/:q', (req, res) => {
        imgur.getImage(req.params.q, req.query.offset).then(ans => {
          var json_string = JSON.stringify(ans)
          res.render('page.jade', { layout : 'layout', json: json_string });
  });
});

router.get('/test', function (req, res) {
    res.render('search_page.pug', { title: 'Hey', message: 'Hello there!' })
  })

module.exports = router;
