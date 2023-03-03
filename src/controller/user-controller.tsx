import React from 'react';
import UserModel from '../model/user-model';
import { postUserData } from '../service/user-http-service';
import { Props, ControllerState } from '../types/types';
import UserView from '../view/user-view';

class UserController extends React.Component<Props, ControllerState> {
  constructor(props) {
    super(props);
    this.state = {userModel: new UserModel()}
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<ControllerState, keyof ControllerState>);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { userModel } = this.state;
    postUserData(userModel)
    .then(response => console.log(response));
  }

  render() {
    const { userModel } = this.state;

    return (
      <UserView
        name={userModel.name}
        email={userModel.email}
        message={userModel.message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default UserController;
