import React from "react";
import NoteLink from "./NoteLink";

export default function NoteList({ notes, onOpenNote }) {
  return (
    <ul className="note-list">
      {notes &&
        Object.keys(notes).map(id => (
          <NoteLink key={id} note={notes[id]} onOpenNote={onOpenNote} />
        ))}
    </ul>
  );
}
