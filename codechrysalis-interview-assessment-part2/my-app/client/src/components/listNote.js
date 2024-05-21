import React, { Fragment, useState, useEffect } from "react";

const ListNote = () => {
    const [notes, setNotes] = useState([]);

    async function deleteNote(id) {
        try {
            const res = await fetch(`http://localhost:5000/notes/${id}`, {method: "DELETE"});

            setNotes(notes.filter(note => note.noteid !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getNotes() {
        const res = await fetch("http://localhost:5000/notes");

        const notesArray = await res.json();
        setNotes(notesArray);
    }

    useEffect(() => {
        getNotes();
    }, []);

    // console.log(notes);

    return (
        <Fragment>
        <h1 className="text-center mt-5">List Notes</h1>
            {
                notes.map(note => (
                <div key={notes.noteid}>
                    {note.title} <button className="btn btn-danger" onClick={() => deleteNote(note.noteid)}>Delete</button>
                </div>
                ))
            }

        </Fragment>
    );
};

export default ListNote;
