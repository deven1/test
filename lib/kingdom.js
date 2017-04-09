const fs = require("fs");

function _loadFile() {
  const json = fs.readFileSync("./kingdoms.json");
  return JSON.parse(json);
}

function _saveFile(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync("./kingdoms.json", json);
}

function getKingdoms() {
  return _loadFile().kingdoms;
}

function makeKingdom(reqBody) {
  const data = _loadFile();
  data.kingdoms.push(reqBody);
  _saveFile(data);
}

module.exports = {
  getKingdoms,
  makeKingdom
};
