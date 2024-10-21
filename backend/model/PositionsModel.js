const {model} = require("mongoose");

const {PositionSchema} = require('../schemas/PositionSchema');

const PositionsModel = new model("position",PositionSchema);

module.exports = {PositionsModel};