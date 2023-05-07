import React, { useEffect, useState } from "react";
import { getAllNotes } from "./client/notes_client";
import Note from "./Note";

function NotesWithoutPagination() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then((res) => {
      console.log(res);
      setNotes(res);
    });
  }, []);

  return (
    <>
      {notes &&
        notes.map((n) => {
          return <Note note={n} />;
        })}
    </>
  );
}

export default NotesWithoutPagination;
