import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { View, Text } from "react-native";
import reducers from "./src/reducers";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC_EyC0IByAv1n2JomWB-tS1FYi6rG52nI",
      authDomain: "manager-15232.firebaseapp.com",
      databaseURL: "https://manager-15232.firebaseio.com",
      projectId: "manager-15232",
      storageBucket: "manager-15232.appspot.com",
      messagingSenderId: "640057662313",
      appId: "1:640057662313:web:98b4d6e8e97d3288"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
