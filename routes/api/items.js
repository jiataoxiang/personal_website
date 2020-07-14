const express = require("express");
const router = express.Router();

// Item Model
const Item =  require("../../modules/item");
const { model } = require("../../modules/item");

// @route GET api/items
// @desc GET ALL Items
// @access Public
router.get("/", (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => {res.json(items)})
});

// @route POST api/items
// @desc Creat A Post
// @access Public
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc Delete an item
// @access Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => Item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;