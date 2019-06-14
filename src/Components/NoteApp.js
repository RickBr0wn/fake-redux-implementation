import React from "react";
import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";

export default function NoteApp({
  notes,
  openNoteId,
  onAddNote,
  onChangeNote,
  onOpenNote,
  onCloseNote
}) {
  return (
    <div>
      {openNoteId ? (
        <NoteEditor
          note={notes[openNoteId]}
          onChangeNote={onChangeNote}
          onCloseNote={onCloseNote}
        />
      ) : (
        <div>
          <NoteList notes={notes} onOpenNote={onOpenNote} />
          <button className="editor-button" onClick={onAddNote}>
            New Note
          </button>
        </div>
      )}
    </div>
  );
}
