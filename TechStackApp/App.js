import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import { Header } from "./src/common";
import LibraryList from "./src/components/LibraryList";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText={"Tech Stack App"} />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
