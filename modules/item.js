const moongoose = require("mongoose");
const Schema = moongoose.Schema;

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item =moongoose.model("item", ItemSchema);