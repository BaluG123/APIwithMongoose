const mongoose = require('mongoose');
const detailsch = new mongoose.Schema(
    { name:String,age:Number,gender:String,email:String,from:String}
)

module.exports = mongoose.model("detail",detailsch)