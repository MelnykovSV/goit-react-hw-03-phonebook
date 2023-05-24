import React from 'react';
import { Container } from './Filter.styled';
import { StyledSearchIcon } from './Filter.styled';
import { IFilterProps } from '../../interfaces';

export class Filter extends React.Component<IFilterProps> {
  searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.contactsFilter(e.target.value);
  };

  render() {
    return (
      <Container>
        <label htmlFor="search-input">Find contacts by name</label>
        <div>
          <input
            type="text"
            name=""
            id="search-input"
            onChange={this.searchHandler}
            placeholder="Type to find..."
          />
          <StyledSearchIcon />
        </div>
      </Container>
    );
  }
}
