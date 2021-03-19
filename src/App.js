import "./styles/App.css";
import OpinionCard from "./components/OpinionCard";
import { useState } from "react";

function App() {
  const [card, setCard] = useState({
    title: "",
    description: "",
  });

  const [cards, setCards] = useState([]);

  const handleOnChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handelOnDelete = (index) => {
    cards.filter(() => {
      return setCards(cards.filter((card, i) => i !== index));
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCards((cards) => [...cards, card]);
    console.log(cards);
  };

  return (
    <div className="App">
      <form className="Form-Wrapper">
        <label className="Title-Contanier">
          <span>Title</span>
          <input
            className="Title-Input"
            name="title"
            onChange={handleOnChange}
          />
        </label>

        <label className="Desc-Contanier">
          <span>Description</span>
          <textarea
            name="description"
            onChange={handleOnChange}
            className="Desc-Input"
          />
        </label>

        <button className="Add-Button" onClick={onSubmit}>
          Create
        </button>
      </form>

      <div>
        {cards.map((card, index) => {
          return (
            <OpinionCard
              title={card.title}
              description={card.description}
              onDelete={() => handelOnDelete(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
