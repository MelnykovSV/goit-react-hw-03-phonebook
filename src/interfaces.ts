export interface IContact {
  name: string;
  number: string;
  id: string;
}
export interface IState {
  contacts: IContact[];
  filter: string;
}

export interface IContactProps {
  name: string;
  number: string;
  id: string;
  deleteHandler: (id: string) => void;
}

export interface IContactsListProps {
  filteredContacts: IContact[];
  contactDeleteHandler: (id: string) => void;
}

export interface IFormProps {
  formSubmit: (data: IContact) => void;
}
export interface IFilterProps {
  contactsFilter: (value: string) => void;
}
