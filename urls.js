const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

async function example() {
  let data = null;
  try {
    const data = await fs.readFile(path.join(__dirname, 'urls.txt'), { encoding: 'utf8' });

  } catch (err) {
    console.log(err);
  }
  //If file can't be read, return error
  if (data === null) {
    return;
  }
  //If file can be read, run rest of the code
  const urlsArray = data.split("\n");
  for (let i = 0; index < urlsArray.length; i++) {
    const url = urlsArray[i];


    try {
      const res = await axios.get(url);

      const hostArray = res.request.host.split(".");
      console.log([hostArray[hostArray.length - 2], hostArray[hostArray.length - 1]].join("."));
    } catch (error) {
      console.log("error");
    }
  }
}

example();