const fs = require("fs");


const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  res.render("cv", { name: "Tasnim Ahmed", educations: edus });
};

const createCV = (req, res) => {  
  res.render("createCV",{});
};






module.exports = { getCV: getCV, createCV:createCV };
