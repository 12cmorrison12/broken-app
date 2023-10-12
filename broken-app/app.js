const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {

    // for(let index = 0; index < req.body.developers.length; index++) {
    //   const developer = req.body.developers[index];
    //   const response = await axios.get(`https://api.github.com/users/${developer}`);
    //   list_of_promises.push(response.data);
    // };

    const list_of_promises = req.body.developers.map(developer => {
      return axios.get(`https://api.github.com/users/${developer}`);
    });
    console.log(list_of_promises);

    const responses = await Promise.allSettled(list_of_promises);
    console.log(responses);
    let out = responses.map(response => {
      if(response.status === 'fulfilled') {
       return { name: response.value.data.name, bio: response.value.data.bio }
      }
   });
   
    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }

});

app.listen(3000);