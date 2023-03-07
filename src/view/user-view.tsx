import React from 'react';
import { ViewProps, ViewState } from '../types/types';
import { Button, Form, Container } from 'semantic-ui-react'

class UserView extends React.Component<ViewProps, ViewState> {

  render() {
    
    const { 
      name, 
      email, 
      message, 
      handleChange, 
      handleSubmit, 
      formSent 
    } = this.props;

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' 
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="text" placeholder='Email' 
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Message</label>
            <input placeholder='Message' 
              name="message"
              value={message}
              onChange={handleChange}
            />
          </Form.Field>        
          <Button type="submit">Submit</Button>
          <span>{formSent?'Formulário enviado com sucesso!':''}</span>
        </form>
      </Container>
    );
  }
}

export default UserView;
