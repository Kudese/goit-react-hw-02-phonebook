import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import PhoneBook from './PhoneBook/PhoneBook';

export class App extends Component() {
  // state = {
  //   contacts: [],
  //   name: '',
  // };
  render() {

    return (
      <>
        <PhoneBook />
        <Contacts />
      </>
    );
  }
}
