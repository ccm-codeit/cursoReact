import "./styles/App.css";
import OpinionCard from "./components/OpinionCard";
import Post from "./components/Post";
import { useState } from "react";

function App() {
  
  // Elementos del Estado
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Funciones que gestionan el Estado
  const [cards, setCards] = useState([]); 

  const handleName = (e) => {
    let newName = e.target.value;
    console.log(newName);
    setName(newName);
  }

  const handleText = (e) => {
    let newText = e.target.value;
    console.log(newText);
    setText(newText);
  }

  const handleOnDelete = (index) => {
    console.log("Deleting comment", index);
    let newCards = cards.filter((card, card_index) => card_index !== index);
    setCards(newCards);
  };

  const eraseName = () => {
    setName("");
  }

  const eraseText = () => {
    setText("");
  }

  const onSubmit = (e) => {
    e.preventDefault();   // evita que la página se recargue si se usó <form> para contener los input
    const card = {
      name,
      text,
    }
    console.log("New card:", name, text);
    const newCards = [card, ...cards];
    console.log("New cardss:\n", newCards);
    setCards(newCards);
    eraseName();
    eraseText();
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Post count={cards.length} />

        <div className="Comment-Section">
          <form className="Form-Wrapper">
            <p className="Form-Title">What do you think?</p>
            <label className="Title-Contanier">
              <input
                className="Title-Input"
                placeholder="Your name"
                onChange={handleName}
                value={name}
              />
            </label>

            <label className="Desc-Contanier">
              <textarea
                placeholder="I think that..."
                onChange={handleText}
                className="Desc-Input"
                value={text}
              />
            </label>

            <button className="Add-Button" onClick={onSubmit}>
              Post
            </button>
          </form>

          <div>
            {cards.map((card, index) => {
              return (
                <OpinionCard
                  key={index}
                  title={card.name}
                  description={card.text}
                  onDelete={() => handleOnDelete(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
