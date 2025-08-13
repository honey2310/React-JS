import React, { useState } from "react";
import "./TextUtils.css";

export default function TextUtils() {
const [Text,setText]=useState("");


const handleAddText = () => {
  setText(Text);
};

const handleLowerCase=()=>{
  setText(Text.toLowerCase())
}

const handleUpperCase=()=>{
  setText(Text.toUpperCase())
}

const handleDelete=()=>{
  setText("")
}

const wordCount=Text.trim().split(" ").length
  return <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand w-100 text-center" href="#">
            Text Utils
          </a>
        </div>
      </nav>

      {/* Textarea */}
      <div className="container mt-3">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Add your text here"
            id="Inputtext"
            style={{ height: "100px" }}
            value={Text}
            onChange={(e)=>{
              setText(e.target.value)
            }}
          ></textarea>
        </div>
      </div>

      {/* Buttons */}
      <div className="container mt-3">
        <button className="btn btn-success me-2" onClick={handleAddText}>
          AddText
        </button>
        <button className="btn btn-warning me-2" onClick={handleUpperCase}>
          To Upper Case
        </button>
        <button className="btn btn-info me-2" onClick={handleLowerCase}>
          To Lower Case
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Clear
        </button>
      </div>

      {/* Preview */}
      <div className="container">
        <p className="fs-4 mt-3">Preview</p>
        <p id="preview">{Text}</p>
        <p id="words">Words: {wordCount}</p>
        <p id="char">Characters:{Text.length}</p>
        <p id="readtime">
          Estimated Read Time: {wordCount * 0.008 } minutes
        </p>
      </div>
  </>;
}

