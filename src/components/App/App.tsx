import { Component } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { Contact } from '../Contact/Contact';
import { ModernNormalize } from 'emotion-modern-normalize';

import { Container } from './App.styled';

// import css from './../PhoneBook.module.scss';

export interface IContact {
  name: string;
  number: string;
  id: string;
}
interface IState {
  contacts: IContact[];
}

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (data: IContact): void => {
    const copy: IState = this.state;
    const normalizedName = data.name.toLowerCase();
    if (
      !copy.contacts.some(item => item.name.toLowerCase() === normalizedName)
    ) {
      this.setState({ contacts: [data, ...copy.contacts] });
    } else {
      alert(`${data.name} is already in contacts.`);
    }
  };

  contactDeleteHandler = (id: string): void => {
    const data = this.state;
    const result = data.contacts.filter((item: IContact): boolean => {
      return item.id !== id;
    });
    this.setState({ contacts: result });
  };
  contactsFilter = (value: string): void => {
    this.setState({ filter: value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(
      (item: IContact): boolean => {
        return item.name.toLowerCase().includes(normalizedFilter);
      }
    );
    return (
      <Container>
        <ModernNormalize />
        <h2>Phonebook</h2>

        <Form formSubmit={this.formSubmitHandler}></Form>
        <ContactsList contactsFilter={this.contactsFilter}>
          {filteredContacts.map((item: IContact) => (
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              key={item.id}
              deleteHandler={this.contactDeleteHandler}
            />
          ))}
        </ContactsList>
      </Container>
    );
  }
}
