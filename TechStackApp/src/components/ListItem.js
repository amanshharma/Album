import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "../common";
import * as actions from "../actions";

class ListItem extends Component {
  componentWillMount() {
    LayoutAnimation.spring();
  }

  renderDescription = () => {
    if (this.props.expanded) {
      return <Text>{this.props.library.item.description}</Text>;
    }
  };
  render() {
    const { id, title } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          <CardSection>{this.renderDescription()}</CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  }
};

const mapSateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapSateToProps,
  actions
)(ListItem);
