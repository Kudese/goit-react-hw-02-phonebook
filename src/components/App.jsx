import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';

export default class App extends Component {
  state = {
    contacts: [ {
     id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    
  };
  handleCreateContact = e => {
    e.preventDefault();
    console.log()
    
    this.setState(({ contacts: prevContacts }) => (
    {contacts: [...prevContacts, { id: nanoid(), name: e.target.name.value, number: e.target.number.value }]}  
    ));
    
  };
  render() {
    return (
      <>
        <PhoneBook onCreateContact={this.handleCreateContact} />
        <Contacts contacts={this.state.contacts}/>
      </>
    );
  }
}
