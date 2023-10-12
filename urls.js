const fs = require("fs/promises");
const path = require("path");
const axios = require("axios");

async function example() {
  let data = null;
  try {
    data = await fs.readFile(path.join(__dirname, "urls.txt"), {
      encoding: "utf8",
    });
  } catch (err) {
    console.log("Sorry cannot read the file");
    return;
  }

  const urlsArray = data.split("\n");
  for (let index = 0; index < urlsArray.length; index++) {
    const url = urlsArray[index];

    // Get host from request object of axios and seperate the domains using "."
    let filename = null;
    let response = null;
    try {
      // Attempt to get the 
      response = await axios.get(url);
      const hostArray = response.request.host.split(".");
      filename = [hostArray[hostArray.length-2], hostArray[hostArray.length-1]].join(".");
    } catch (error) {
      console.log(`There was an error for hostname ${url}`);
    }

    if (response !== null) {
      try {
        await fs.writeFile(path.join(__dirname, filename), response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
}

example();