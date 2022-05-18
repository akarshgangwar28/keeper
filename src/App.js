import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import notes from "./notes";

export default function App() {
  return (
    <div>
      <Header />

      {notes.map((note) => {
        return <Note key={note.key} title={note.title} content={note.content} />;
      }
      )}

      <Footer />
    </div>
  );
}
