import React, {Component} from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import  css from './App.module.css'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };
  
  formAddContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const isContactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };
  
  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  };
  
  componentDidUpdate(prevProps, prevState) { 
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts))
    }
  };
  
  render() {
  const existingContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  return (
    <div className={css.container}>
    <h2 className = {css.title}>Phonebook</h2>
      <ContactForm onSubmit={this.formAddContact} />
      <h3 className = {css.title}>Contacts</h3>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>
      <ContactList contacts={existingContact} onDeleteContact={this.deleteContact} />
      </div>
  );
  }
};
 