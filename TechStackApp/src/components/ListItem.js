import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection } from "../common";

const ListItem = ({ library }) => {
  return (
    <CardSection>
      <Text style={styles.titleStyle}>{library.item.title}</Text>
    </CardSection>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  }
};

export default ListItem;
