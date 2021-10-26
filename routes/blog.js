const express = require("express");
const blogRoutes = express.Router();
const dbo = require("../db/conn");

let Post = require('../models/post.model');

const ObjectId = require("mongodb").ObjectId;

blogRoutes.route('/blog').get((req, res) => {
    Post.find().then(posts => res.json(posts))
    .catch(err => res.status(400).json('err: ' + err));
})

blogRoutes.route('/blog/makerand').get((req,res) => {
    const title = 'pingus chunus'
    const content = 'this is a real pingus chungus right here, no joke'

    const newPost = new Post({
        title,
        content
    })

    newPost.save()
    .then(() => res.json('Post added'))
    .catch(err => res.status(400).json('error: ' + err));
});

module.exports = blogRoutes;