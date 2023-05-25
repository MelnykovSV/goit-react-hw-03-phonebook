import { Component } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';
import { Filter } from '../Filter/Filter';

import { IContact, IState } from '../../interfaces';

export class App extends Component<{}, IState> {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts: string | null = localStorage.getItem('contacts');

    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = (data: IContact): boolean => {
    const copy: IState = this.state;
    const normalizedName = data.name.toLowerCase();
    if (
      !copy.contacts.some(item => item.name.toLowerCase() === normalizedName)
    ) {
      this.setState({ contacts: [data, ...copy.contacts] });
      return true;
    } else {
      alert(`${data.name} is already in contacts.`);
      return false;
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

        <Form formSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter contactsFilter={this.contactsFilter} />
        <ContactsList
          filteredContacts={filteredContacts}
          contactDeleteHandler={this.contactDeleteHandler}
        />
      </Container>
    );
  }
}
