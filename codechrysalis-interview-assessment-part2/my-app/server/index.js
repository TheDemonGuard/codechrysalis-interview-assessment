const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./db');
const { Pool } = require('pg');

app.use(cors());
app.use(express.json()); // For accessing req.body

// ROUTES

// GET ALL NOTE
app.get("/notes", async(req, res) => {
    try {
        const allNotes = await pool.query("SELECT * FROM test");

        res.json(allNotes.rows)
    } catch (err) {
        console.error(err.message);
    }
});

// GET A NOTE
app.get("/notes/:id", async(req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const note = await pool.query("SELECT * FROM test WHERE noteid = $1", [id]);
        res.json(note.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// CREATE A NOTE
app.post("/note", async(req, res) => {
    try {
        // res.json(req.body);
        const {title} = req.body;
        console.log("title : " + title);
        // const newNote = await pool.query("INSERT INTO note (title, description, dataTime) VALUES ($1, $2, $3) RETURNING *", []);
        const newNote = await pool.query("INSERT INTO test (title) VALUES ($1) RETURNING *", [title]);

        res.json(newNote.rows[0]);
    } catch (err) {
        console.log("ERROR In Create NOTE");
        console.error(err.message);
    }
});

// UPDATE A NOTE
app.put("/notes/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {title} = req.body;
        const updateNote = await pool.query("UPDATE test SET title = $1 WHERE noteid = $2 RETURNING *", [title, id])

        res.json("NOTE Updated " + id)
    } catch (err) {
        console.error(err.message);
    }
});

// DELETE A NOTE
app.delete("/notes/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await pool.query("DELETE FROM test WHERE noteid = $1 RETURNING *", [id]);

        res.json("NOTE Deleted " + id);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server started at PORT 5000")
});
