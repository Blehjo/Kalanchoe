import { useEffect, useState } from "react";
import { getPanelNotes } from "../utils/api/note.api";

const NoteInfo = ({ panelId }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getPanelNotes(panelId)
        .then((response) => setNotes(response.data));
    }, []);

    return (
        <div>Notes: {notes.length}</div>
    );
}

export default NoteInfo;