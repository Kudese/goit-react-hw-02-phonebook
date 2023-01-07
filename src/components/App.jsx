import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleCreateContact = e => {
    e.preventDefault();
    console.log()
    // console.log(this.state.contacts)
    // const {name}= e.target
    // this.setState(prevState=>{
    // return [...prevState.contacts, {id: nanoid(), name:name.value}]
    this.setState(({ contacts: prevContacts }) => (
    {contacts: [...prevContacts, { id: nanoid(), name: e.target.name.value }]}  
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
