const axios=require("axios")

const promise = new Promise(async (resolve, reject) => {
  try {
    let fakeData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!fakeData.data) return reject("Something went wrong!");
    resolve(fakeData.data);
  } catch (err) {
    console.log(err);
    return reject("Something went wrong!");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
