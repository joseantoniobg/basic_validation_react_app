import { Component } from "react";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    text: "",
    textLength: 0,
  };

  textLengthHandler = (event) => {
    const textLength = event.target.value.length;
    this.setState({ textLength: textLength, text: event.target.value });
  };

  characterRemovalHandler = (event) => {
    const text = this.state.text;
    const textArray = text.split("");

    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] === event.target.value) {
        textArray.splice(i, 1);
        i--;
      }
    }
    const finalText = textArray.join("");
    this.setState({ textLength: finalText.length, text: finalText });
  };

  render() {
    const charArray = this.state.text.split("");
    const hasChar = new Array();

    const charComponents = charArray.map((character) => {
      let index = hasChar.findIndex((char) => {
        return char === character;
      });

      if (index < 0) {
        hasChar.push(character);
      }

      return index < 0 ? (
        <CharComponent
          charText={character}
          click={this.characterRemovalHandler}
        />
      ) : null;
    });

    return (
      <div className="App">
        <h1>Teste!</h1>
        <label className="Label" for="myText">
          My text:
        </label>
        <br />
        <textarea
          id="myText"
          rows="30"
          cols="150"
          value={this.state.text}
          onChange={this.textLengthHandler}
        />
        <p>Actual Text Size: {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength} />
        {charComponents}
      </div>
    );
  }
}

export default App;
