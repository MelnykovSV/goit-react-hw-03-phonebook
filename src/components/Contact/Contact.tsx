import React, { Component } from 'react';
import { Container } from './Contact.styled';
import { BsTrash3 } from 'react-icons/bs';

interface IContactProps {
  name: string;
  number: string;
  id: string;
  deleteHandler: (id: string) => void;
}

export class Contact extends Component<IContactProps> {
  state = {
    id: this.props.id,
  };
  handleDeleteClick = () => {
    this.props.deleteHandler(this.state.id);
  };
  render(): JSX.Element {
    return (
      <Container>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.number}</p>
        </div>

        <button type="button" onClick={this.handleDeleteClick}>
          <BsTrash3 size="16px" color="white" />
        </button>
      </Container>
    );
  }
}
