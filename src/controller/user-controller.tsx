import React from 'react';
import UserModel from '../model/user-model';
import { postUserData } from '../service/user-http-service';
import { Props, ControllerState } from '../types/types';
import UserView from '../view/user-view';

class UserController extends React.Component<Props, ControllerState> {
  constructor(props) {
    super(props);    
    this.state = {name: '', email: '', message: '', formSent: false}
  }

  handleChange = (event) => {    
    this.setState({ [event.target.name]: event.target.value } as Pick<ControllerState, keyof ControllerState>);
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userModel = { 
      name: this.state.name, 
      email: this.state.email, 
      message: this.state.message 
    } as UserModel;
    
    postUserData(userModel)
    .then(response => {
      console.log(response);
      if(response.status == 201){
        this.setState({
          name: this.state.name, 
          email: this.state.email, 
          message: this.state.message, 
          formSent: true
        });
      }
    });
  }

  render() {
    const { name, email, message, formSent } = this.state;
    const userModel = {name, email, message};


    return (
      <UserView
        name={userModel.name}
        email={userModel.email}
        message={userModel.message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formSent={formSent}
      />
    );
  }
}

export default UserController;
