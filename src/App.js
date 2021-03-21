import "./styles/App.css";
import OpinionCard from "./components/OpinionCard";
import Post from "./components/Post";
import { useState } from "react";
//Test
function App() {
  const [card, setCard] = useState({
    // la información de los inputs
    title: "",
    description: "",
  });

  const [cards, setCards] = useState([]); // lista de nuestras 'Opinion Cards'

  const handleOnChange = (e) => {
    // manejador de cambios en input
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

  const onSubmit = (e) => {
    // agrega una nueva card a la lista de cards
    e.preventDefault(); // evita que recargue la página
    setCards((cards) => [...cards, card]);
    console.log(cards);
  };

  return (
    <div className="App">
      <div className="Main-Wrapper">
        <Post count={cards.length} />

        <div className="Comment-Section">
          <form className="Form-Wrapper">
            <p>What do you think?</p>
            <label className="Title-Contanier">
              <input
                className="Title-Input"
                name="title"
                placeholder="Your name"
                onChange={handleOnChange}
              />
            </label>

            <label className="Desc-Contanier">
              <textarea
                name="description"
                placeholder="I think that..."
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
    </div>
  );
}

export default App;
