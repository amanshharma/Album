import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button, Spinner } from "../common";

class LoginForm extends Component {
  onEmailChange = text => {};

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="Email id"
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="Password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
