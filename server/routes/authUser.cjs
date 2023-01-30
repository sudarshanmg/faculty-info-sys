const db = require('../database/database.cjs');
const express = require('express');


// Creating a common router that can be used to route to different pages
const router = express.Router();


router.post('/authenticate-user', (req, res) => {
  const aadhaar = req.body.aadhaar;
  const password = req.body.password;


  db.query(
    'select aad, password from users where aad=?',
    [aadhaar],
    (err, result) => {
      if (result.length !== 0) {
        if(aadhaar === result[0].aad && password===result[0].password) {
          res.send({auth: 'success'});
        }
        else {
          res.send({auth: 'failure'});
        }
      } else {
        res.send({auth: 'error'});
      }
    }
  );
});

module.exports = router;
