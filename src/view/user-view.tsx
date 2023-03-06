import React from 'react';
import { ViewProps, ViewState } from '../types/types';

class UserView extends React.Component<ViewProps, ViewState> {
  render() {
    const { name, email, message, handleChange, handleSubmit, formSent } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <span>{formSent?'Formulário enviado com sucesso!':''}</span>
      </form>
    );
  }
}

export default UserView;
