import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCPA5LVGQgpj47EgYIh6JYsXT1TrLsQDJo",
      authDomain: "authentication-1ad2c.firebaseapp.com",
      databaseURL: "https://authentication-1ad2c.firebaseio.com",
      projectId: "authentication-1ad2c",
      storageBucket: "authentication-1ad2c.appspot.com",
      messagingSenderId: "2268949641",
      appId: "1:2268949641:web:d5f449937304dd37"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
