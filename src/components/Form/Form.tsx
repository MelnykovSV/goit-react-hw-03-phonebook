import React, { Component } from 'react';
import { Container } from './Form.styled';
const shortid = require('shortid');

interface IFormProps {
  formSubmit: (data: IContact) => void;
}

interface IContact {
  name: string;
  number: string;
  id: string;
}

export class Form extends Component<IFormProps> {
  state = {
    name: '',
    number: '',
    id: '',
  };

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IContact = this.state;
    this.clearForm();
    data.id = shortid.generate();

    this.props.formSubmit(data);
  };

  clearForm = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };
  render() {
    return (
      <Container onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.changeHandler}
            placeholder="Name your contact"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.changeHandler}
            placeholder="Paste or type the number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Container>
    );
  }
}
