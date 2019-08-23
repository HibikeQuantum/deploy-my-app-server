const express = require('express');
// const cors = require('cors');

const app = express();
// app.use(cors());


app.use('/', (req, res) => {
  res.send("this is es2 server deployed");
});

app.use('/useful', (req, res) => {
  data = {
    seoul: "CodeStates",
    busan: "CodeBoots",
    Daegu: "CodeJJambbong",
    Gwanju: "CodeJJajang"
  };
  res.send(JSON.stringify(data));
});

app.listen(5000, () => {
  console.log("5000_ start!");
});
