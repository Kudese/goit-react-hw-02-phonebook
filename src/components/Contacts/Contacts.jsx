import { render } from '@testing-library/react';
import { Component } from 'react';
import s from '../Contacts/Contacts.module.css';
export default class Contacts extends Component {
  state = {
    filter: '',
  };
  handleFiletrContacts = e => {
    this.setState({filter: e.target.value });
  };
  render() {
    return (
      <div className={s.conteiner}>
        <h2>Contacts</h2>
        <h3>Find by name</h3>
        <input onChange={this.handleFiletrContacts}></input>
        <ul>
          {this.props.contacts.map(el => {
            return (
              <li key={el.id}>
                {el.name}:{el.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
