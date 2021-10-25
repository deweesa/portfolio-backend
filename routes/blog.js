const express = require("express");
const blogRoutes = express.Router();
const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

blogRoutes.route('/blog').get((req, res) => {
    let db_connection = dbo.getDb('portfolio_blog');
    db_connection
        .collection('posts')
        .find({})
        .toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        });
})

module.exports = blogRoutes;