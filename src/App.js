import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      messages: []
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
    //console.log(event.target.value)
  };

  passMsg = () => {
    const { inputValue, messages } = this.state;
    const newMsg = inputValue.toLowerCase().trim();
    if (inputValue) {
      if (!messages.includes(newMsg)) {
        this.setState({
          messages: [...messages, newMsg], // = this.state.messages.push(newMsg)
          inputValue: ""
        });
      } else {
        alert("message already included");
      }
    }
  };

  render() {
    const { inputValue, messages } = this.state;
    const content = messages.map((message) => {
      return <p>{message}</p>;
    });
    console.log(inputValue);
    return (
      <div className="container">
        <input value={inputValue} onChange={this.handleChange} />
        <button onClick={this.passMsg}>Pass Message</button>
        {/* <button onClick={inputValue ? this.passMsg : null}>Pass Message</button> */}
        {content}
      </div>
    );
  }
}

export default App;
