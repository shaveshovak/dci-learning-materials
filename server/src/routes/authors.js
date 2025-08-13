const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// GET BY ID 
// http://localhost:4008/api/authors/154778959595262
router.get('/:id', async (req, res) => {
    const doc = await Author.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Authot not found!' });
    res.json(doc);
})


// GET ALL Elements

module.exports = router;