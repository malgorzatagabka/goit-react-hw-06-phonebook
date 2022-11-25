import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import style from './App.module.css';

const App = () => {

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter/>
      <ContactList/>
    </div>
  );
};

export default App;
