const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async(req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        name: req.body.name,
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Posts
router.delete('/:id', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});


// Update
router.put('/:id', async(req, res) => {
    const post = await loadPostsCollection();
    await post.updateOne({ _id: new mongodb.ObjectID(req.params.id) }, { $set: { name: req.body.name, text: req.body.text } });

    res.status(201).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://emmy:emmy@cluster0-0srbm.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('vue_express').collection('posts');
}

module.exports = router;