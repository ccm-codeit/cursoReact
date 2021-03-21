import React from "react";
import "../styles/App.css";

function OpinionCard(props) {
  return (
    <div className="Card-Wrapper">
      <p className="Card-Title">{props.title}</p>
      <p className="Card-Description">{props.description}</p>
      <button className="Delete-Button" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
}

export default OpinionCard;
