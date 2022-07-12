import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
// This array of data is used for testing
const testData = [
  { name: "Y.Shashidhar", company: "Meta", avtar_url: null },
  { name: "Jhone", company: "netflix", avtar_url: null },
  { name: "Doe", company: "Prime", avtar_url: null }
];

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);
// creating a form using class based components

class Form extends React.Component {
  // helping fuction to read inputs from the user
  // userInput = React.createRef();
  handleuserSubmit = async (e) => {
    e.preventDefault();
    // doing api call
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );

    // this is same like document.getElementById but when
    //it comes to react it is a bit different

    this.props.onSubmit(resp.data);
  };
  state = { userName: "" };
  render() {
    return (
      <form
        onSubmit={this.handleuserSubmit}
        style={{
          padding: "20px",
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <input
          type="text"
          placeholder="GitHub profile names"
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "20px",
            userSelect: "none"
          }}
          // ref={this.userInput}
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <button
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "20px",
            background: "red",
            cursor: "pointer"
          }}
        >
          Add Card
        </button>
      </form>
    );
  }
}
// Using Class based component
class Card extends React.Component {
  render() {
    const temp = this.props;
    return (
      <div
        className="githib-profile"
        style={{ margin: "1rem", display: "flex" }}
      >
        <img src={temp.avatar_url} alt="" style={{ width: "100px" }} />
        <div
          className="info"
          style={{ display: "inline-block", marginLeft: "20px" }}
        >
          <div style={{ fontSize: "50px" }}>{temp.name}</div>
          <div style={{ fontSize: "30px" }}>{temp.company}</div>
        </div>
      </div>
    );
  }
}

// using class based component
class App extends React.Component {
  // state for adding the cards to the website
  // we can use usestate and setstate to add the objects to the array

  //This function is used to add cards to the state

  state = {
    profilesState: testData
  };
  addNewProfile = (profileData) => {
    this.setState((preState) => ({
      profilesState: [...preState.profilesState, profileData]
    }));
  };
  render() {
    return (
      <div>
        <h2 className="Header">{this.props.title}</h2>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profilesState} />
      </div>
    );
  }
}

export default App;
