import { render } from '@testing-library/react';
import { Component } from 'react';
import s from '../Contacts/Contacts.module.css';
import ContactIteam from './ContactIteam/Contactteam';
export default class Contacts extends Component {
  state = {
    filter: '',
  };
  handleFiletrContacts = e => {
    const searh = e.target.value

    this.setState({filter: searh });
   
    
  };
  render() {
    let list = this.props.contacts.filter((el)=>el.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div className={s.conteiner}>
        <h2>Contacts</h2>
        <h3>Find by name</h3>
        <input onChange={this.handleFiletrContacts} value={this.state.filter}></input>
        <ul>
         <ContactIteam list={list}/>
        </ul>
      </div>
    );
  }
}
