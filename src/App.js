import "./styles/App.css";
import OpinionCard from "./components/OpinionCard";
import { useState } from "react";

function App() {
  const [card, setCard] = useState({          // la información de los inputs
    title: "",
    description: "",
  });

  const [cards, setCards] = useState([]);     // lista de nuestras 'Opinion Cards'

  const handleOnChange = (e) => {             // manejador de cambios en input
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnDelete = (index) => {
    cards.filter(() => {
      return setCards(cards.filter((card, i) => i !== index));
    });
  };

  const onSubmit = (e) => {       // agrega una nueva card a la lista de cards
    e.preventDefault();           // evita que recargue la página
    setCards((cards) => [...cards, card]);
    console.log(cards);
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <div className="Main-Post">
            <div>
              <p className="Post-Title">Hello Title</p>
            </div>
            <div className="Content-Wrapper">
              <p>Hello content</p>
            </div>
        </div>
        <form className="Form-Wrapper">
          <label className="Title-Contanier">
            <span>Title</span>
            <input
              className="Title-Input"
              name="title"
              placeholder="My Opinion Title"
              onChange={handleOnChange}
            />
          </label>

          <label className="Desc-Contanier">
            <span>Description</span>
            <textarea
              name="description"
              placeholder="What do you think?" 
              onChange={handleOnChange}
              className="Desc-Input"
            />
          </label>

          <button className="Add-Button" onClick={onSubmit}>
            Add
          </button>
        </form>

        <div>
          {cards.map((card, index) => {
            return (
              <OpinionCard
                title={card.title}
                description={card.description}
                onDelete={() => handleOnDelete(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
