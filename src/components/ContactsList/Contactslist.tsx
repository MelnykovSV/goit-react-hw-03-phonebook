import React from 'react';
import { Container } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
import { Contact } from '../Contact/Contact';

export class ContactsList extends React.Component<IContactsListProps> {
  render() {
    return (
      <Container>
        <ul>
          {this.props.filteredContacts.map(item => (
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              key={item.id}
              deleteHandler={this.props.contactDeleteHandler}
            />
          ))}
        </ul>
      </Container>
    );
  }
}
