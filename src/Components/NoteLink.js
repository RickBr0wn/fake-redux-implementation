import React from "react";
import NoteTitle from "./NoteTitle";

export default function NoteLink({ note, onOpenNote }) {
  return (
    <li className="note-list-item">
      <a href="#" onClick={() => onOpenNote(note.id)}>
        <NoteTitle note={note} />
      </a>
    </li>
  );
}
